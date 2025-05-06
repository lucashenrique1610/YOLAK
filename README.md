<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pedido YOLAK</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&text=YOLAK" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&text=!" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="background-swirl"></div>

  <div class="main-container">
    <div class="title-container">
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
      <div class="title-layer"></div>
    </div>
    <div class="block">
      <h2>Informação do Cliente</h2>
      <div class="form-group">
        <label for="nome">Seu nome:</label>
        <input type="text" id="nome" required>
        <span class="error-message">Por favor, insira seu nome.</span>
        <span class="tooltip">Digite seu nome completo</span>
      </div>
      <div class="form-group">
        <label for="endereco">Endereço de entrega:</label>
        <input type="text" id="endereco" required>
        <span class="error-message">Por favor, insira um endereço válido.</span>
        <span class="tooltip">Inclua rua, número e bairro</span>
      </div>
    </div>
    <div class="block">
      <h2>Produtos</h2>
      <div class="form-group">
        <label for="litro">1 Litro (R$15.00/un):</label>
        <input type="number" id="litro" min="0" value="0">
        <span class="error-message">Quantidade inválida.</span>
      </div>
      <div class="form-group hidden" id="saboresLitroGroup">
        <label>Sabores (1 Litro):</label>
        <div class="checkbox-group" id="saboresLitro">
          <label><input type="checkbox" name="saboresLitro" value="Morango"> Morango</label>
          <label><input type="checkbox" name="saboresLitro" value="Coco"> Coco</label>
          <label><input type="checkbox" name="saboresLitro" value="Pêssego"> Pêssego</label>
          <label><input type="checkbox" name="saboresLitro" value="Abacaxi"> Abacaxi</label>
          <label><input type="checkbox" name="saboresLitro" value="Ameixa"> Ameixa</label>
        </div>
        <span class="error-message">Selecione pelo menos um sabor para 1 Litro.</span>
        <span class="tooltip">Selecione os sabores desejados</span>
      </div>
      <div class="form-group">
        <label for="meio">500ml (R$8.00/un):</label>
        <input type="number" id="meio" min="0" value="0">
        <span class="error-message">Quantidade inválida.</span>
      </div>
      <div class="form-group hidden" id="saboresMeioGroup">
        <label>Sabores (500ml):</label>
        <div class="checkbox-group" id="saboresMeio">
          <label><input type="checkbox" name="saboresMeio" value="Morango"> Morango</label>
          <label><input type="checkbox" name="saboresMeio" value="Coco"> Coco</label>
          <label><input type="checkbox" name="saboresMeio" value="Pêssego"> Pêssego</label>
          <label><input type="checkbox" name="saboresMeio" value="Abacaxi"> Abacaxi</label>
          <label><input type="checkbox" name="saboresMeio" value="Ameixa"> Ameixa</label>
        </div>
        <span class="error-message">Selecione pelo menos um sabor para 500ml.</span>
        <span class="tooltip">Selecione os sabores desejados</span>
      </div>
      <div class="form-group">
        <label for="trescentos">300ml (R$5.00/un):</label>
        <input type="number" id="trescentos" min="0" value="0">
        <span class="error-message">Quantidade inválida.</span>
      </div>
      <div class="form-group hidden" id="saboresTrescentosGroup">
        <label>Sabores (300ml):</label>
        <div class="checkbox-group" id="saboresTrescentos">
          <label><input type="checkbox" name="saboresTrescentos" value="Morango"> Morango</label>
          <label><input type="checkbox" name="saboresTrescentos" value="Coco"> Coco</label>
          <label><input type="checkbox" name="saboresTrescentos" value="Pêssego"> Pêssego</label>
          <label><input type="checkbox" name="saboresTrescentos" value="Abacaxi"> Abacaxi</label>
          <label><input type="checkbox" name="saboresTrescentos" value="Ameixa"> Ameixa</label>
        </div>
        <span class="error-message">Selecione pelo menos um sabor para 300ml.</span>
        <span class="tooltip">Selecione os sabores desejados</span>
      </div>
    </div>
    <div class="block">
      <h2>Forma de Pagamento</h2>
      <div class="form-group">
        <label for="pagamento">Forma de pagamento:</label>
        <select id="pagamento" required>
          <option value="Pix">Pix</option>
          <option value="Débito">Débito</option>
          <option value="Crédito">Crédito</option>
          <option value="A prazo">A prazo</option>
        </select>
        <span class="error-message">Selecione uma forma de pagamento.</span>
      </div>
      <div id="prazoData" class="form-group hidden">
        <label for="dataPagamento">Data de pagamento (máx 30 dias):</label>
        <input type="date" id="dataPagamento">
        <span class="error-message">Selecione uma data válida (máx 30 dias).</span>
      </div>
      <button type="button" onclick="enviarPedido()">Fazer Pedido via WhatsApp</button>
    </div>
    <div class="block">
      <h2>Resumo de Pedido</h2>
      <div class="summary" id="summary">
        <p>Total de itens: <span id="totalItems">0</span></p>
        <p>Valor total: R$ <span id="totalValue">0.00</span></p>
      </div>
    </div>
    <div class="social-footer">
      <p>Siga-nos nas redes sociais!</p>
      <div class="social-links">
        <a href="https://www.instagram.com/yolak_natural/" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/yolaknatural" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://wa.me/5533998271428" target="_blank" aria-label="WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
