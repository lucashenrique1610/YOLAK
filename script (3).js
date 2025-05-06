const prazoDataDiv = document.getElementById('prazoData');
const pagamentoSelect = document.getElementById('pagamento');
const dataPagamentoInput = document.getElementById('dataPagamento');
const litroInput = document.getElementById('litro');
const meioInput = document.getElementById('meio');
const trescentosInput = document.getElementById('trescentos');
const saboresLitroGroup = document.getElementById('saboresLitroGroup');
const saboresMeioGroup = document.getElementById('saboresMeioGroup');
const saboresTrescentosGroup = document.getElementById('saboresTrescentosGroup');
const totalItemsSpan = document.getElementById('totalItems');
const totalValueSpan = document.getElementById('totalValue');

// Prices (in BRL)
const prices = {
  litro: 15.00,
  meio: 8.00,
  trescentos: 5.00
};

// Show/hide flavor groups based on quantity
function toggleFlavorGroup(input, group) {
  const quantity = parseInt(input.value) || 0;
  group.classList.toggle('hidden', quantity === 0);
  if (quantity === 0) {
    group.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });
  }
  updateSummary();
}

// Update summary (total items and value)
function updateSummary() {
  const litroQty = parseInt(litroInput.value) || 0;
  const meioQty = parseInt(meioInput.value) || 0;
  const trescentosQty = parseInt(trescentosInput.value) || 0;

  const totalItems = litroQty + meioQty + trescentosQty;
  const totalValue = (litroQty * prices.litro) + (meioQty * prices.meio) + (trescentosQty * prices.trescentos);

  totalItemsSpan.textContent = totalItems;
  totalValueSpan.textContent = totalValue.toFixed(2);
}

litroInput.addEventListener('input', () => {
  toggleFlavorGroup(litroInput, saboresLitroGroup);
});
meioInput.addEventListener('input', () => {
  toggleFlavorGroup(meioInput, saboresMeioGroup);
});
trescentosInput.addEventListener('input', () => {
  toggleFlavorGroup(trescentosInput, saboresTrescentosGroup);
});

// Initial summary update
updateSummary();

// Show/hide payment date field based on payment method
pagamentoSelect.addEventListener('change', (e) => {
  prazoDataDiv.classList.toggle('hidden', e.target.value !== 'A prazo');
  if (e.target.value !== 'A prazo') {
    dataPagamentoInput.value = '';
  }
});

// Validate date (max 30 days)
dataPagamentoInput.addEventListener('change', () => {
  const selectedDate = new Date(dataPagamentoInput.value);
  const today = new Date();
  const diffDays = (selectedDate - today) / (1000 * 60 * 60 * 24);
  if (diffDays > 30 || isNaN(selectedDate)) {
    dataPagamentoInput.classList.add('error');
    dataPagamentoInput.nextElementSibling.style.display = 'block';
    dataPagamentoInput.value = '';
  } else {
    dataPagamentoInput.classList.remove('error');
    dataPagamentoInput.nextElementSibling.style.display = 'none';
  }
});

// Form validation
function validateForm() {
  let isValid = true;

  // Validate required text and select inputs
  const inputs = document.querySelectorAll('input[required], select[required]');
  inputs.forEach(input => {
    const errorMessage = input.nextElementSibling;
    if (!input.value) {
      input.classList.add('error');
      errorMessage.style.display = 'block';
      isValid = false;
    } else {
      input.classList.remove('error');
      errorMessage.style.display = 'none';
    }
  });

  // Validate flavors for each size
  const sizes = [
    { input: litroInput, group: saboresLitroGroup, id: 'saboresLitro' },
    { input: meioInput, group: saboresMeioGroup, id: 'saboresMeio' },
    { input: trescentosInput, group: saboresTrescentosGroup, id: 'saboresTrescentos' }
  ];

  sizes.forEach(size => {
    const quantity = parseInt(size.input.value) || 0;
    if (quantity > 0) {
      const checkboxes = document.querySelectorAll(`#${size.id} input[name="${size.id}"]:checked`);
      const errorMessage = size.group.querySelector('.error-message');
      if (checkboxes.length === 0) {
        size.group.querySelector('.checkbox-group').classList.add('error');
        errorMessage.style.display = 'block';
        isValid = false;
      } else {
        size.group.querySelector('.checkbox-group').classList.remove('error');
        errorMessage.style.display = 'none';
      }
    }
  });

  // Validate quantities
  const quantities = [litroInput, meioInput, trescentosInput].map(input => parseInt(input.value) || 0);
  if (quantities.every(q => q === 0)) {
    alert('Por favor, selecione pelo menos uma quantidade.');
    isValid = false;
  }

  return isValid;
}

// Send order to WhatsApp
function enviarPedido() {
  if (!validateForm()) return;

  const formData = {
    nome: document.getElementById('nome').value.trim(),
    endereco: document.getElementById('endereco').value.trim(),
    litro: parseInt(litroInput.value) || 0,
    meio: parseInt(meioInput.value) || 0,
    trescentos: parseInt(trescentosInput.value) || 0,
    saboresLitro: Array.from(document.querySelectorAll('#saboresLitro input[name="saboresLitro"]:checked'))
      .map(checkbox => checkbox.value)
      .join(', '),
    saboresMeio: Array.from(document.querySelectorAll('#saboresMeio input[name="saboresMeio"]:checked'))
      .map(checkbox => checkbox.value)
      .join(', '),
    saboresTrescentos: Array.from(document.querySelectorAll('#saboresTrescentos input[name="saboresTrescentos"]:checked'))
      .map(checkbox => checkbox.value)
      .join(', '),
    pagamento: document.getElementById('pagamento').value,
    dataPagamento: document.getElementById('dataPagamento').value
  };

  let message = `📦 *Novo Pedido YOLAK*\n\n`;
  message += `👤 *Nome*: ${formData.nome}\n`;
  message += `📍 *Endereço*: ${formData.endereco}\n\n`;
  message += `🧴 *Quantidades*:\n`;
  message += `- 1 Litro: ${formData.litro} un${formData.saboresLitro ? ` (Sabores: ${formData.saboresLitro})` : ''}\n`;
  message += `- 500ml: ${formData.meio} un${formData.saboresMeio ? ` (Sabores: ${formData.saboresMeio})` : ''}\n`;
  message += `- 300ml: ${formData.trescentos} un${formData.saboresTrescentos ? ` (Sabores: ${formData.saboresTrescentos})` : ''}\n\n`;
  message += `💰 *Valor Total*: R$ ${((formData.litro * prices.litro) + (formData.meio * prices.meio) + (formData.trescentos * prices.trescentos)).toFixed(2)}\n`;
  message += `💳 *Pagamento*: ${formData.pagamento}\n`;
  if (formData.pagamento === 'A prazo' && formData.dataPagamento) {
    message += `📅 *Data de Pagamento*: ${new Date(formData.dataPagamento).toLocaleDateString('pt-BR')}\n`;
  }

  const whatsappLink = `https://wa.me/5533998271428?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, '_blank');
}