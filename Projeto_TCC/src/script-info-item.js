let product_id = localStorage.getItem('id')


let info_image = document.querySelector('#imagem-produto')
let info_name = document.querySelector('#nome-produto')
let info_preco_pix = document.querySelector('#preco-pix')
let info_preco_parcela = document.querySelector('#preco-parcela')
let info_text = document.querySelector('#desc')
let info_parcelas = document.querySelector('#parcelas')
let info_parcela_bruta = Number(localStorage.getItem('preco_produto_parcela'))
let ver_parcela = document.querySelector('#div_parcelas')
let valores_parcela = document.querySelector('#valores_parcela')
let comprar = document.querySelector('#link_compra')

let cart_btn = document.querySelector('#botao_carrinho')
let logged_user = localStorage.getItem('login') || 'nouser'
let users = JSON.parse(localStorage.getItem('users'))



info_image.src = localStorage.getItem('imagem_produto')
info_name.innerHTML = localStorage.getItem('nome_produto')
info_preco_pix.innerHTML = localStorage.getItem('preco_produto_pix')
info_preco_parcela.innerHTML = `(Parcelado) R$ ${localStorage.getItem('preco_produto_parcela').replace('.', ',')}`

info_parcelas.innerHTML = `Em até 12x de R$ ${(info_parcela_bruta / 12).toFixed(2).replace('.', ',')} `


// **** Declarando os detalhes de cada produto: ****


if(product_id == 'id0'){
info_text.innerHTML = `
        <p>Explore uma potência incrível do Computador Mancer Gamer THOR III! Com um processador AMD Ryzen 5 4600G e uma placa de vídeo integrada Radeon Vega Graphics, este computador gamer oferece desempenho excepcional para jogos e tarefas intensivas.</p>
        <P>Equipado com 16GB de memória RAM, garante multitarefa fluida e suave, enquanto o SSD de 480GB proporciona tempos de inicialização ultra rápidos. Sua estrutura robusta e design moderno adicionam um toque de estilo ao setup, enquanto o sistema de resfriamento eficiente mantém a temperatura ideal durante as sessões de jogos prolongadas.</p>

<p>Descubra uma experiência de jogo envolvente com este poderoso computador gamer da Mancer!</p>
    `
    comprar.href = 'https://www.pichau.com.br/computador-mancer-gamer-thor-iii-amd-ryzen-5-4600g-16gb-ddr4-ssd-480gb-36717'
    }else if(product_id == 'id1'){
        info_text.innerHTML = `
        <p>Aumente o desempenho do seu computador com a memória RAM Rise Mode Z. Com 32GB de capacidade e velocidade de 3200MHz, esta memória é ideal para rodar jogos e programas exigentes sem travamentos.

        Alta qualidade, fabricada com componentes selecionados para garantir o máximo de desempenho e durabilidade. Ela também possui dissipador de calor para manter as temperaturas baixas, mesmo durante as sessões de uso mais intensas.</p>
    `
    comprar.href = 'https://www.kabum.com.br/produto/475278/memoria-ram-rise-mode-z-32gb-3200mhz-ddr4-cl19-branco-rm-d4-32g-3200zw?utm_id=21585251035&gad_source=1&gclid=CjwKCAiA3Na5BhAZEiwAzrfagDM5WRv4b1vZVEjsRIBKoYslW464s8_ts7hbUSSgHqvYRWvaDowVZxoCquYQAvD_BwE'
    }else if(product_id == 'id2'){
        info_text.innerHTML = `
        <p>O NV2 PCIe 4.0 NVMe SSD da Kingston é uma solução substancial de armazenamento de última geração alimentada por um controlador Gen 4x4 NVMe. O NV2 oferece velocidades de leitura/gravação de até 3.500/2.800 MB/s com menores requisitos de energia e menor aquecimento para ajudar a otimizar o desempenho do seu sistema e agregar valor sem sacrifícios.</p>
    `
    comprar.href = ' https://www.kabum.com.br/produto/380746/ssd-kingston-nv2-2-tb-m-2-2280-pcie-4-0-x4-nvme-leitura-3500-mb-s-gravacao-2800-mb-s-azul-snv2s-2000g?utm_id=21585251035&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnwG0s7DJsVx7aR326eMJCNuewMzULMvnzTGIKP3WcpkLCIt-tVAOc0aApESEALw_wcB'

    }else if(product_id == 'id3'){
        info_text.innerHTML = `
       <p> Fácil Computadores - Com 30 anos de excelência atuando no Brasil, criamos soluções completas na área de informática. Nossos computadores são equipados com os mais recentes processadores de alta velocidade, maximizando sua produção.</P>
    `
    comprar.href = 'https://www.kabum.com.br/produto/271844/pc-gamer-completo-facil-i7-16gb-gtx-1050ti-4gb-ssd-240gb-fonte-500w-monitor-21-5-polegadas-kit-gamer-teclado-mouse-e-headset'
    }else if(product_id == 'id4'){
        info_text.innerHTML = `
        <p>Com processador de 6 núcleos e 12 threads, placa de vídeo Radeon Vega 7 e memória RAM de 8GB DDR4, este computador oferece
velocidade e qualidade gráfica excepcionais.
Além disso, possui armazenamento SSD de 480GB, que garante maior rapidez na inicialização do sistema e abertura de programas. O gabinete tower ATX tem dimensões de 35cm x 19cm x 43cm e conta com placa mãe modelo A520, suporte para processadores AMD Ryzen de 3ª geração com Radeon Graphics e 1 slot PCI Express 3.0 x16.</p>
    `
    comprar.href = 'https://www.kabum.com.br/produto/592466/computador-blue-pc-amd-ryzen-5-5600gt-ram-8gb-ssd-480gb-ddr4-vega-7'
    }else if(product_id == 'id5'){
        info_text.innerHTML = `
        <p>Jogue na Luz com o Gabinete Gamer Rise Mode Wave White ARGB
        Transforme seu setup em um refinado campo de batalha iluminado com o Gabinete Gamer Rise Mode Wave White ARGB. Este Mid Tower ATX une elegância e performance em um design todo branco que vai deixar sua marca!</p>`
        comprar.href = ' https://www.kabum.com.br/produto/474524/gabinete-gamer-rise-mode-wave-white-mid-tower-argb-atx-3-cooler-fan-argb-branco-rm-wa-bw-argb?utm_id=21437971630&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnwDx6TKy1fkOPa0K7COr5CmR8t2sfzL-XvlgygTccDwEJRMEaBwAiAaAiWXEALw_wcB'
    }else if(product_id == 'id6'){
        info_text.innerHTML = `
        <p>
        Processador AMD Ryzen 5™ 4600G com 6 núcleos e 12 threads, Socket AM4 e temperatura máxima 95°C.</p>`
        comprar.href = 'https://pichau.com.br/processador-amd-ryzen-5-4600g-6-core-12-threads-3-7ghz-4-2ghz-turbo-cache-11mb-am4-100-100000147box'
    }else if(product_id == 'id7'){
        info_text.innerHTML = `
        <p>Experimente a revolução na refrigeração com o Cooler Master MLW-D36M-A18PZ-R1. Este refrigerador líquido da série MasterLiquid Lite é projetado para oferecer desempenho superior, mantendo sua CPU em temperaturas ideais mesmo durante as tarefas mais exigentes. Com um radiador de 360 mm de alumínio, ele garante uma dissipação de calor eficaz e eficiente.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/528790/water-cooler-cooler-master-masterliquid-360l-core-argb-360mm-amd-e-intel-preto-mlw-d36m-a18pz-r1?utm_id=21585251035&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnyT91FShQJrcEmRHT4nnv2i3q1S7Kr5aiZwkahQwhFDJpnO89__TXgaAps2EALw_wcB'
    }else if(product_id == 'id8'){
        info_text.innerHTML = `
        <p>Baseado na arquitetura Zen 3 da AMD, que oferece um aumento de desempenho significativo em relação às gerações anteriores. Ele é capaz de rodar os jogos mais recentes em configurações máximas, mesmo em resoluções altas.
        </p>`
        comprar.href = 'https://www.amazon.com.br/Processador-AMD-Ryzen-5600GT-Threads/dp/B0CQ4DTJYX/ref=asc_df_B0CQ4DTJYX/?tag=googleshopp00-20&linkCode=df0&hvadid=709884378235&hvpos=&hvnetw=g&hvrand=1871725511566626396&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-2280624564623&psc=1&mcid=27fa47b7f7ab33018f4f5e5106461cdb&gad_source=1'
    }else if(product_id == 'id9'){
        info_text.innerHTML = `
        <p>Quer você esteja jogando os jogos mais recentes, projetando o próximo arranha-céu ou processando dados científicos. Com AMD Ryzen™, você está na liderança.
        Equipado para a batalha Com gráfico AMD Radeon incorporado, os processadores para desktop Ryzen série 5000 G te levam rapidamente ao campo de batalha.
        Jogue os melhores jogos prontos para 1080p suave, ou atualize com uma placa de vídeo para um aumento de desempenho ainda maior.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/203463/processador-amd-ryzen-7-5700g-4-6ghz-max-turbo-cache-20mb-octa-core-am4-vi-deo-integrado-100-100000263box?utm_id=21434223532&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnwKrFivEbSoax5Q4e4-zSPyDQHuuEdgJIyPPo5p4YClx4NcJeO-pjkaAslVEALw_wcB'
    }else if(product_id == 'id10'){
        info_text.innerHTML = `
        <p>O melhor processador de jogos do mundo, com 12 núcleos para alimentar jogos, streaming e muito mais. Imbatível no jogo Obtenha o desempenho de jogos de alta velocidade do melhor processador de desktop do mundo.
        </p>`
        comprar.href = 'https://www.kabum.com.br/produto/129460/processador-amd-ryzen-9-5900x-3-7ghz-4-8ghz-max-turbo-cache-70mb-12-nucleos-24-threads-am4-100-100000061wof?utm_id=21416437563&gad_source=1&gclid=Cj0KCQiA6Ou5BhCrARIsAPoTxrD-W8lfI_4R0hPFM1FsHzInVQECuuG7psoSZdLcYpfyoFoD59ulUbkaAjiHEALw_wcB'
    }else if(product_id == 'id11'){
        info_text.innerHTML = `
        <p>As placas-mãe GIGABYTE B550 maximizam o potencial do seu PC com a tecnologia AMD StoreMI. StireMI acelera tradicional dispositivos de armazenamento para reduzir os tempos de inicialização e aprimorar a experiência geral do usuário.</p>`
        comprar.href = 'https://www.pichau.com.br/placa-mae-gigabyte-b550m-aorus-elite-ddr4-socket-am4-chipset-amd-b550?gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnz1MdP9Qi_QvPs_dER50Lv50k1kCKaoEr74eyXf67VyUqR157YhtDIaAk7tEALw_wcB'
    }else if(product_id == 'id12'){
        info_text.innerHTML = `
        <p>Construída ao redor das especificações e recursos mais exigentes, a AsRock B550M Steel Legend visa os usuários do dia a dia e entusiastas! Oferecendo uma forte gama de materiais/componentes para assegurar um desempenho estável e confiável. Uma placa-mãe que atende qualquer tarefa – com estilo!</p>`
        comprar.href = 'https://www.pichau.com.br/placa-mae-asrock-b550m-steel-legend-ddr4-socket-am4-chipset-amd-b550-b550m-steel-legend?gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnz_j0QYfQ6to8X2RaihNM1V9iawjjslClKSwRi51UA6Bm0bd6vQ4YgaAr4bEALw_wcB'
    }else if(product_id == 'id13'){
        info_text.innerHTML = `
        <p>PLACA MÃE B450M, PROCESSADOR AMD Ryzen 5 4600G, RADEON VEGA GRAPHICS, MEMÓRIA 16GB, GABINETE TGT B110 e PLACA MÃE B450M </p>`
        comprar.href = 'https://www.pichau.com.br/computador-mancer-home-hm543-amd-ryzen-5-4600g-16gb-ddr4-ssd-480gb-38896'
    }else if(product_id == 'id14'){
        info_text.innerHTML = `
        <p>A nova solução de arrefecimento do seu CPU está bem aqui: Mancer Vortex. Sistema de contato direto, iluminação em RGB, alta performance em dissipação de calor e um design que vai trazer beleza e eficiência para o seu setup. Prepare-se para um espetáculo de refrigeração!</p>`
        comprar.href = 'https://www.pichau.com.br/cooler-para-processador-mancer-vortex-rainbow-rgb-mcr-vor-01?gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnxkD5XlnAn8M_aKQoty6_YG3wMAGQOaEZ6x6p2lzkZCZBke7Yu1c1gaAkopEALw_wcB'
    }else if(product_id == 'id15'){
        info_text.innerHTML = `
        <p>LEDs RGB Rainbow de alto brilho.
        Alto fluxo de ar com um baixo nível de ruido.
        Compatibilidade já com o socket AMD AM4 e Intel Lga 1200.
        Ótimo desempenho contando com duplo fans de 90mm para refrigeração do dissipador.
        6 Heat pipes em cobre proporcionando uma melhor dissipação de calor.
        Fans com conector 4p PWM possibilitando o controle de rotação diretamente na placa mãe.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/130040/air-cooler-rise-mode-gamer-g800-rgb-amd-intel-90mm-preto-rm-ac-o8-rgb?utm_id=21437971630&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnztLR_b8YOL8adPN9rmClk2eLQ-4w0dXWE3d14AcT4b9cG8KJ3dzdkaAkfIEALw_wcB'
    }else if(product_id == 'id16'){
        info_text.innerHTML = `
        <p>O kit 3 Fans Energy Rise Mode possuem uma ótima refrigeração para aqueles que precisam de fans silenciosos em seu gabinete. Fans com duplo anel de LEDs com alto brilho proporcionando uma ótima iluminação ARGB interna do gabinete.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/153647/kit-com-3-ventoinhas-rise-mode-energy-120mm-argb-preto-fn-02-rgb-5v?utm_id=21437971630&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnxxrwZQrJPCN-WRqK1tM3DG9HgnMVStlxzl1JKao8tPV3QO5sbW1MgaAlVIEALw_wcB'
    }else if(product_id == 'id17'){
        info_text.innerHTML = `
        <p>marca: rage-x
        modelo: rx580-8gb-gddr5
        
        - gpu: amd radeon rx 580
        - tamanho da memória: 8gb
        - tipo da memória: gddr5
        - largura de banda: 256bits
        - padrão de barramento: pcie x16
        - solução de calor: dual fan
        - suporte directx: 12
        - freesync: sim
        - energia mínima requirida no sistema: 400w (sugere-se 450w ou superior)</p>`
        comprar.href = 'https://www.kabum.com.br/produto/596801/amd-radeon-rx-580-8gb-gddr5-256bits-rage-x-rx580-8gb-gddr5'
    }else if(product_id == 'id18'){
        info_text.innerHTML = `
        <p>Perfeito Para Seu Setup
        A vitrine perfeita para seus hardwares e todo RGB, personalize com sua criatividade!
        Ampla Compatibilidade
        Compatível com placas-mãe de última geração, placas de vídeo grandes e de alta performance, coolers e water coolers de até 360mm com mais de um local de instalação e muito espaço para fans na construção do seu airflow.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/518736/gabinete-gamer-kbm-gaming-gn210-mini-tower-m-atx-lateral-e-frontal-em-vidro-preto-kggn210pt?utm_id=21416437422&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnwKtVfZvxlZ6WTWmpkqO1UjZG2eQ325VhncUVvrOeiRuEXDg4M9coYaAsrXEALw_wcB'
    }else if(product_id == 'id19'){
        info_text.innerHTML = `
        <p>Gabinete Gamer Rise Mode Galaxy Glass Branco
        O Gabinete Gamer Rise Mode Galaxy Glass Branco possui design futurista e gamer. Com Lateral e Fronte em Vidro Temperado, tenha maior visibiliade e acesso de todos seus componentes para um visual dinâmico.
        Alto Desempenho
        Projetado com material de altíssima qualidade, acabamento premium, Lateral e Frontal em Vidro Temperado, layout de fácil instalação e suporte para até 10 fans.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/320909/gabinete-gamer-rise-mode-galaxy-glass-mid-tower-lateral-e-frontal-em-vidro-temperado-branco-rm-ga-gg-fw?utm_id=21437971630&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnwaHl8TiBcg386r_UgKZMTRaBEpCMkLL8ekY0Rgpo4FFwfxL1W30oAaAhpKEALw_wcB'
    }else if(product_id == 'id20'){
        info_text.innerHTML = `
        <p>Esta fonte de alimentação de alta qualidade é projetada para fornecer energia estável e eficiente para seus componentes de computador. Com certificação 80 Plus Bronze, ela garante uma alta eficiência energética, reduzindo o consumo de energia e o calor gerado.</p>`
        comprar.href = 'https://www.terabyteshop.com.br/produto/22872/fonte-duex-500fse-500w-80-plus-bronze-pfc-ativo-dx-500fse?gad_source=1&gclid=Cj0KCQiA6Ou5BhCrARIsAPoTxrCOWFFWW2tAZT53upajyza6fG13gxsSzvUm1U9S6i8z_vTfFh2oJ1kaAkbOEALw_wcB'
    }else if(product_id == 'id21'){
        info_text.innerHTML = `
        <p>Opção de ventilador único para estação de energia Mini-ITX
        Projetada especificamente para usuários de PCs pequenos, a Palit GeForce RTX 3050 StormX possui um design compacto, porém poderoso, de ventilador único. Com uma placa de 170 mm de comprimento, as placas gráficas StormX são compatíveis com Mini-ITX, tornando-as perfeitas para jogadores e criadores que se preocupam com o espaço.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/534706/placa-de-video-rtx-3050-stormix-palit-nvidia-geforce-6gb-gddr6-dlss-ray-tracing-adaptive-sync-ne63050018je-1070f?utm_id=21416437563&gad_source=1&gclid=Cj0KCQiA6Ou5BhCrARIsAPoTxrBRGXxchUqJ0HvnjY5QUw0p_I6HidYSedq8bqGB5Q_iBnqrjplr8TAaAjKvEALw_wcB'
    }else if(product_id == 'id22'){
        info_text.innerHTML = `
        <p>Prepare-se para elevar seus games a um novo patamar com a fonte Rise Mode Zeus! Projetada para atender aos gamers mais exigentes, essa fonte de alimentação é a combinação perfeita de desempenho, eficiência e durabilidade. Com 500W de potência real e certificação Bronze, a Zeus garante energia estável e eficiente para alimentar sua placa de vídeo de alta performance e todos os componentes do seu PC gamer. A tecnologia Active PFC garante máxima compatibilidade com a rede elétrica, enquanto o ventilador de 120mm silencioso mantém tudo sob controle, mesmo durante as sessões de jogo mais intensas.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/525053/fonte-gamer-rise-mode-zeus-550w-bronze-full-modular-pfc-ativo-preto-rm-psu-01-bz-550?utm_id=21585251035&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnz0tB3It4QDtRGB6VylJa_gKcXCrH8uFNrkHI8LIHpS22RkIgoM1oIaAqEJEALw_wcB'
    }else if(product_id == 'id23'){
        info_text.innerHTML = `
        <p>Oferece aos jogadores uma opção de fonte de alimentação de nível básico segura, confiável e eficiente. Seus principais recursos incluem certificação 80 PLUS Bronze, design de circuito DC para DC, trilho único de 12V, PFC ativo e ventoinha de baixo ruído. O MAG A550BN será uma das melhores escolhas para jogadores que estão apenas começando a olhar para computadores DIY. Após a instalação, os jogadores podem desfrutar imediatamente de uma experiência de desempenho confiável sem configurações adicionais. A eficiência de sua fonte de alimentação influencia diretamente o desempenho de seu sistema e seu consumo de energia. A certificação 80 PLUS BRONZE promete menor consumo de energia e maior eficiência.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/369658/fonte-msi-mag-a650bn-650w-80-plus-bronze-pfc-ativo-com-cabo-preto-306-7zp2b22-ce0?utm_id=21585251035&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnwEcXV_WUJ4ZfYxrgLRDeB5oLMGUKv_F5NpAKWAT1oUeYIP9gvGKzYaAhDkEALw_wcB'
    }else if(product_id == 'id24'){
        info_text.innerHTML = `
        <p>A A520M K V2 DDR4 suporta processadores AMD Ryzen™ 5000/ Ryzen™ 5000 G/ Ryzen™ 4000 G / Ryzen™ 3000 e Ryzen™ 3000 G, conector PCIe 3.0 x4 M.2 e quatro memórias DDR4 de até 5100 MHz (O.C.), sendo a escolha ideal para quem busca potência e eficiência.</p>`
        comprar.href = 'https://www.pichau.com.br/placa-mae-gigabyte-a520m-k-v2-ddr4-socket-amd-am4-m-atx-chipset-amd-a520-a520m-k-v2?gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnwZ-KMlc_ZU1YHUby3uYE4Bl_irXMkV9g-WOwXCPn8fJNF-fRq1L10aAvwuEALw_wcB'
    }else if(product_id == 'id25'){
        info_text.innerHTML = `
        <p>A B450M-HDV R4.0 suporta processadores AMD AM4 Ryzen™ 2000, 3000, 4000 G-Series, 5000 e 5000 G-Series*, memórias de até DDR4 3200+(OC)*, e duas conexões PCIe lhe proporcionando todas as funcionalidades para um setup imponente.</p>`
        comprar.href = 'https://www.pichau.com.br/placa-mae-asrock-b450m-hdv-r4-0-ddr4-socket-am4-chipset-amd-b450?gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnwlGS1auXSzqmCkNcJFqzCftvJ8xd1PQ5pQFYThbdEaGOCrhTm4gXQaAuYjEALw_wcB'
    }else if(product_id == 'id26'){
        info_text.innerHTML = `
        <p>O MWE Bronze V2 oferece uma maneira simples e confiável de alimentar seu sistema com segurança e eficiência a baixo custo. A classificação de eficiência 80 PLUS Bronze, design de circuito DC-to-DC + LLC, barramento único de +12 V, PFC ativo e ventoinha HDB sensível à temperatura oferecem uma fonte de alimentação que permanece fiel à sua finalidade original. Esta fonte de alimentação atenderá a todas as suas principais necessidades de computação sem os aborrecimentos ou desafios de recursos especiais adicionais, sincronização de software ou outros recursos. Basta conectá-lo ao seu sistema e começar a trabalhar. Para uma excelente experiência de computação de nível intermediário, você não pode errar com o MWE Bronze V2.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/465299/fonte-cooler-master-mwe-bronze-v2-full-range-750w-80-plus-bronze-pfc-ativo-sem-cabo-preto-mpe-7501-acaaw-bbr?utm_id=21585251035&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnzJkay115SPcvJgYypi9Qp4Zs_zHJKuwhYUvwFIMUrkQMs1rRf-cskaAuDjEALw_wcB'
    }else if(product_id == 'id27'){
        info_text.innerHTML = `
        <p>Memória Kingston Fury Beast A memória Kingston FURY Beast DDR4 proporciona um poderoso aumento de performance para jogos, edição de vídeo e renderização. Ela faz o overclock automático para a especificação de maior performance do módulo que seja suportada pelo sistema* e está pronta para Intel XMP e AMD Ryzen. Com o seu dissipador de calor de perfil baixo, a memória FURY Beast DDR4 permanece fria e pronta para o seu game. 100% testada na fábrica, é a atualização definitiva para seu computador. Os processadores/chipsets da Intel até a 7ª Geração não eram desenvolvidos para suportar módulos de memória DDR4 fabricados com chips DRAM de densidade 16Gbit.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/172365/memoria-ram-kingston-fury-beast-8gb-3200mhz-ddr4-cl16-preto-kf432c16bb-8?utm_id=21585251035&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnye4HtiL1KBE5CibsC60X_cDWJ_qPOmfOLEMFBibXkF4jHIeB0GLdYaApVkEALw_wcB'
    }else if(product_id == 'id28'){
        info_text.innerHTML = `
        <p>O NV2 PCIe 4.0 NVMe SSD da Kingston é uma solução substancial de armazenamento de última geração alimentada por um controlador Gen 4x4 NVMe. O NV2 oferece velocidades de leitura/gravação de até 3.500/2.100 MB/s com menores requisitos de energia e menor aquecimento para ajudar a otimizar o desempenho do seu sistema e agregar valor sem sacrifícios.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/380745/ssd-1-tb-kingston-nv2-m-2-2280-pcie-nvme-leitura-3500-mb-s-e-gravacao-2100-mb-s-snv2s-1000g?utm_id=21585251035&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnwdk1BNuZBAxQ7hxTJglFuNnVPZvWWIa3r18HPAYe5Zc3CT6EEwwp4aAqAmEALw_wcB'
    }else if(product_id == 'id29'){
        info_text.innerHTML = `
        <p>Equipada com uma memória GDDR17 de 8 Gbps 128GB e 6 bits, a GeForce RTX 4060 1-Click OC 2X suporta até 2490MHz para o seu exclusivo OC de 1 clique, com um cooler de slot duplo leve e as ventoinhas duplas de 92 mm, tornando-se o 2º design mais compacto das placas gráficas GALAX GeForce RTX série 40. Com o design ultra-eficiente do refrigerador, proporciona desempenhos impressionantes à temperatura ideal, mantendo uma operação extremamente silenciosa.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/520724/placa-de-video-rtx4060-1-click-oc-2x-teclab-lite-galax-nvidia-geforce-8gb-gddr6-g-sync-dlss-ray-tracing?utm_id=21733851091&gad_source=1&gclid=Cj0KCQiA6Ou5BhCrARIsAPoTxrAy2aAq0IsLQ17ldL3HXx6XF-TpW5LJzaS0G0o1AfY1-yLml4nT-bkaAjS7EALw_wcB'
    }else if(product_id == 'id30'){
        info_text.innerHTML = `
        <p>Uma das peças mais importante para deixar seu computador rápido. a Memória Ram Rise Mode Z é o que você precisa para não ter seu Pc travando enquanto você usa seus programas favoritos. Para ter acesso aos arquivos de forma rápida, invista na memória RAM da Rise Mode que deixa o acesso mais rápido. Com 16GB de capacidade, a Memória RAM Rise Mode é ótima para ajudar seu computador a trabalhar rápido para acessar redes sociais, editar textos e fazer planilhas, por exemplo, além de jogar com alto desempenho.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/383894/memoria-ram-rise-mode-z-16gb-3200mhz-ddr4-cl19-preto-rm-d4-16g-3200z?utm_id=21585251035&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnz8sJJ5YRN36tc15X6t4MFyFh0r6Lm5KmYobqcJJ4_bfxy1FBgtBaAaAjn_EALw_wcB'
    }else if(product_id == 'id31'){
        info_text.innerHTML = `
        <p>Na era multinúcleos, a velocidade de processamento sem precedentes da memória DDR5 garante que sua CPU de ponta obtenha dados rapidamente e com facilidade. Seja para jogar, criar conteúdo, abrir 100 guias ou executar várias tarefas simultaneamente, seu PC gamer aguentará tarefas complexas mais rápido do que nunca.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/583184/memoria-ram-corsair-vengeance-rgb-32gb-2x16gb-5200mhz-ddr5-cl40-preto-cmh32gx5m2b5200c40?utm_id=21585251035&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnzZDYlaogVjHUfTbFmNb2wKiUTxb0Ix5r3n-tT6et8hPUBs5fGznf0aAr24EALw_wcB'
    }else if(product_id == 'id32'){
        info_text.innerHTML = `
        <p>O NV2 PCIe 4.0 NVMe SSD da Kingston é uma solução substancial de armazenamento de última geração alimentada por um controlador Gen 4x4 NVMe. O NV2 oferece velocidades de leitura/gravação de até 3.000/1.300 MB/s com menores requisitos de energia e menor aquecimento para ajudar a otimizar o desempenho do seu sistema e agregar valor sem sacrifícios.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/380743/ssd-kingston-nv2-250-gb-m-2-2280-pcie-nvme-leitura-3000-mb-s-e-gravacao-1300-mb-s-snv2s-250g?utm_id=21585251035&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnxR9crpBTEvlqdSQOJOLpjYZedKc3dXbU8nX4UYUkoAysOHVJY8lQwaAqxSEALw_wcB'
    }else if(product_id == 'id33'){
        info_text.innerHTML = `
        <p>O NV2 PCIe 4.0 NVMe SSD da Kingston é uma solução substancial de armazenamento de última geração alimentada por um controlador Gen 4x4 NVMe. O NV2 oferece velocidades de leitura/gravação de até 3.500/2.100 MB/s com menores requisitos de energia e menor aquecimento para ajudar a otimizar o desempenho do seu sistema e agregar valor sem sacrifícios.</p>`
        comprar.href = 'https://www.kabum.com.br/produto/380744/ssd-kingston-nv2-500-gb-m-2-2280-pcie-4-0-x4-nvme-leitura-3500-mb-s-gravacao-2100-mb-s-azul-snv2s-500g?utm_id=21585251035&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnxiiLOF-_823LPSgb0F5TZaadVV1ZSknYnKeUWZG8v82LVssSJ9qCkaAhTqEALw_wcB'
    }else if(product_id == 'id34'){
        info_text.innerHTML = `
        <p>A construção robusta, o amplo espaço interno para componentes e a excelente gestão de cabos são características frequentemente elogiadas. Usuários destacam a facilidade de montagem e a boa organização do fluxo de ar, resultando em um produto de alta qualidade e ótimo custo-benefício. Apesar de algumas observações sobre a fragilidade de certas partes e a falta de alguns detalhes no acabamento, a maioria dos consumidores o recomenda.</p>`
        comprar.href = 'https://www.magazineluiza.com.br/gabinete-gamer-rise-mode-z3-glass-lateral-em-vidro-fume-preto-rm-z03-03-fb/p/jk447da211/in/gbgm/?&seller_id=kabum&utm_source=google&utm_medium=cpc&utm_term=76949&utm_campaign=google_eco_per_ven_pla_tc_apo_3p_in&utm_content=&partner_id=76949&gclsrc=aw.ds&gclid=Cj0KCQiA57G5BhDUARIsACgCYnw0ByrLBQpKRWuRv5Sj3-iD9ZYAuRwTeffJP4QDuVjWmeg4bNZXcQgaAuzOEALw_wcB'
    }else if(product_id == 'id35'){
        info_text.innerHTML = `
        <p>Deixe seu PC potente com NVIDIA® GeForce RTX™ 4080 SUPER e RTX 4080. Dê vida aos seus jogos e projetos criativos com ray tracing e gráficos potencializados por AI. Equipada com a ultra-eficiente arquitetura NVIDIA Ada Lovelace e 16GB de memória G6X super-rápida.</p>`
        comprar.href = 'https://www.pichau.com.br/placa-de-video-pny-geforce-rtx-4080-super-xlr8-gaming-verto-epic-x-rgb-oc-edition-16gb-gddr6x-256-bit-vcg4080s16tfxxpb1-o?gad_source=1&gclid=Cj0KCQiA6Ou5BhCrARIsAPoTxrDyWKrleQ0TPm3L28lZDdyTSWQAnIbVqNqFjsbfKgOftCTA0HOfrCMaAvJBEALw_wcB'
    }   


// 
ver_parcela.addEventListener('mouseenter', () => {

    for(let i = 1; i <= 12; i++){
        valores_parcela.style.display = 'flex'
        valores_parcela.innerHTML += `${i}X sem Juros de R$ ${(info_parcela_bruta/i).toFixed(2)}</p>`
    }
    
})

    ver_parcela.addEventListener('mouseout', () => {
        valores_parcela.innerHTML = ''
        valores_parcela.style.display = 'none'
    })

    cart_btn.addEventListener('click', () => {
        if(logged_user == 'nouser'){
            alert('ERRO: ' + 'Você não está logado.')
        }else if(logged_user != 'nouser'){
            addToCart()
        }else{
            alert('ERRO: ' + '"logged_user" not found on "localStorage"')
        }
    })
    
    function addToCart(){
        console.log(logged_user)
        let cart = {
                produto: localStorage.nome_produto,
                imagem_produto: localStorage.imagem_produto,
                preco_vista: localStorage.preco_produto_pix,
                preco_parcela: localStorage.preco_produto_parcela,
            }
        let user_cart = users.find(user => user.nome === logged_user).carrinho
        localStorage.setItem('user_cart', JSON.stringify(user_cart))
        
        
        if(user_cart.find(item => item.produto === localStorage.getItem('nome_produto'))){
            alert('Este produto já foi adicionado ao seu carrinho.')
        }else{
            alert('produto adicionado com êxito!')
            users.find(user => user.nome === logged_user).carrinho.push(cart)
            localStorage.setItem('users', JSON.stringify(users))
        }
    
    
    }
    
    
