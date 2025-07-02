<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechFinder</title>
    <link rel="stylesheet" href="src/style-header.css">
    <link rel="stylesheet" href="src/style-index.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="src/style-footer.css">
    <link rel="stylesheet" href="src/style-banner.css">
    <link rel="stylesheet" href="src/style-responsivo-geral.css">

    
                                                        <!-- Bebas Neue -->

    <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

    


</head>
<body>

    <header>
        <div id="logo"></div>

        <div id="pesquisa-div">
            <input type="text" placeholder="Pesquise aqui seu produto"  id="pesquisa">
            
        </div>

        <div id="botoes">
            <a href=""> <div class="botao">Home</div></a> 
           <a href="aboutus.html"><div class="botao">Sobre Nós</div></a>
           <a href="login.html" id="botao-login"><div class="botao">Login</div></a>   
          </div>

        <div id="menu-botoes">
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
        </div>
        
        <div id="botoes-responsivo" class="hide"> 
                <a href=""> <div class="botao">Home</div></a> 
                <a href="aboutus.html"><div class="botao">Sobre Nós</div></a>
                <a href="login.html"><div class="botao">Login</div></a>  
        </div>
    </header>
    
    <div class="slider">
        <div class="slides">
            <!-- radio buttons -->
             <input type="radio" name="radio-btn" id="radio1">
             <input type="radio" name="radio-btn" id="radio2">
             <input type="radio" name="radio-btn" id="radio3">
             <!-- fim radio buttons -->

             <!-- slides images -->
              <div class="slide first">
                    <img src="imagens/banner/kabum-banner.jpg" alt="Imagem 1">
              </div>
              <div class="slide">
                    <img src="imagens/banner/pichau-banner.jpg" alt="Imagem 2" id="imagem2">
              </div>
              <div class="slide">
                    <img src="imagens/banner/terabyte-banner.jpg" alt="Imagem 3" id="imagem3">
              </div>
              <!-- fim slides images -->

              <!-- navigation auto -->
               <div class="navigation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
               </div>


            </div>

            <div class="manual-navigation">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
            </div>

    </div>
    
    <div id="welcomemsg">
    </div>
    

    <p id="mycart"><i class="bi bi-cart2"></i></p>
    
    <main>
        
        <div id="select-categoria">
        

        <select name="categoria" id="categoria">
            <option value="todos">Todos</option>
            <option value="pc-montado">PC Montado</option>
            <option value="placa-mae">Placa Mãe</option>
            <option value="processador">Processador</option>
            <option value="memoria-ram">Memória RAM</option>
            <option value="armazenamento">SSD's</option>
            <option value="gabinete">Gabinetes</option>
            <option value="fonte">Fontes</option>
            <option value="placa-de-video">Placas de Vídeo</option>
        </select>

    </div>
        

    <div id="catalogo">

        <?php

        // connection:
        require 'db.php';
      
        // Queries to HTML content
        $mysqli->select_db('concessionaria');
    

        $query = "SELECT * FROM test";

        $mysqli->query($query);
        echo "";
        
        ?>

    </div>


    <div class="hide" id="meu-carrinho">
        <h1 id="cart_tittle">MEU CARRINHO</h1>
        <i id="close">X</i>
    </div>

    </main>
    <footer>
        <div id="autores">
            <p>Todos os direitos reservados a:</p>
            <a href=""><div id="gusta" class="author"> Gustavo Ferreira <i class="bi bi-github"></i></div></a>
           <a href=""><div id="geoh" class="author"> Geovanne Lopes <i class="bi bi-github"></i></div></a> 
           <p>2024</p>
        </div>

    </footer>
 
    <script src="src/script-banner.js"></script>
    <script src="src/script-menu-botoes.js"></script>
</body>
</html>
