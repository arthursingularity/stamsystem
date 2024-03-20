var materialcodesystem = {
    "35012": {
        "material": "803/03 - ESP INOX (G)",
        "receita": 74,
        "peso": 543,
        "peso_maior": 546,
        "peso_menor": 534,
        "peso_especial": "543 / 546 / 534"
    },
    "35071": {
        "material": "804/03 - ESP INOX (G)",
        "receita": 83,
        "peso": 539,
        "peso_maior": 549,
        "peso_menor": 536,
        "peso_especial": "539 / 549 / 536"
    },
    "40467": {
        "material": "804/33 - ESP INOX (G)",
        "receita": 92,
        "peso": 535,
        "peso_maior": 539,
        "peso_menor": 528,
        "peso_especial": "535 / 539 / 528"
    },
    "35274": {
        "material": "1801/21 - ESP INOX (G)",
        "receita": 910,
        "peso": 660,
        "peso_maior": 670,
        "peso_menor": 658,
        "peso_especial": "660 / 670 / 658"
    },
    "35081": {
        "material": "803/09 - ESP INOX (G)",
        "receita": 518,
        "peso": 740,
        "peso_maior": 748,
        "peso_menor": 734,
        "peso_especial": "740 / 748 / 734"
    },
    "43326": {
        "material": "823/35 - T/RED RQ1 INOX",
        "receita": 99,
        "peso": 569,
        "peso_maior": 575,
        "peso_menor": 563,
        "peso_especial": "569 / 575 / 563"
    },
    "34946": {
        "material": "803/21 ROS ANTIQUE",
        "receita": 99,
        "peso": 682,
        "peso_maior": 688,
        "peso_menor": 676,
        "peso_especial": "682 / 688 / 676"
    },
    "41749": {
        "material": "823/35 RQ1 INOX",
        "receita": 99,
        "peso": 570,
        "peso_maior": 576,
        "peso_menor": 564,
        "peso_especial": "570 / 576 / 564"
    }
}

// Login - variaveis

var entrar_button = document.getElementById("entrar_button")
var login_input = document.getElementById("login_input")
var login_page = document.getElementById("login_page")
var login_success = document.getElementById("login_success")
var login = document.getElementById("login")
var senha_input = document.getElementById("senha_input")
var senha = document.getElementById("senha")
var error_message = document.getElementById("error_message")

// Menu - variaveis

var ps = document.getElementById("ps")
var comercio = document.getElementById("comercio")
var boxes_ps = document.getElementById("boxes_ps")
var ps_quant_font2 = document.getElementById("ps_quant_font2")
var total_production = document.getElementById("total_production")

// Box_1_ps - variaveis

var addbutton = document.getElementById('meuSpan')
var box_1_inputs = document.getElementById("box_1_inputs")
var box_1_voltar =document.getElementById("box_1_voltar")
var box_1_confirmar = document.getElementById('box_1_confirmar');
var input_quantity = document.getElementById("input_quantity")
var box_1 = document.getElementById("box_1")
var box_1_etiqueta = document.getElementById("box_1_etiqueta")
var redefinir_etiqueta_box_1 = document.getElementById("redefinir_etiqueta_box_1")
var material_code_etiqueta_box_1 = document.getElementById("material_code_etiqueta_box_1")
var material_etiqueta_box_1 = document.getElementById("material_etiqueta_box_1")
var quantity_etiqueta_box_1 = document.getElementById("quantity_etiqueta_box_1")
var receita_number_etiqueta_box_1 = document.getElementById("receita_number_etiqueta_box_1")
var peso_number_etiqueta_box_1 = document.getElementById("peso_number_etiqueta_box_1")
var peso_maior_number_etiqueta_box_1 = document.getElementById("peso_maior_number_etiqueta_box_1")
var peso_menor_number_etiqueta_box_1 = document.getElementById("peso_menor_number_etiqueta_box_1")
var passando_etiqueta_box_1 = document.getElementById("passando_etiqueta_box_1")
var concluir_etiqueta_box_1 = document.getElementById("concluir_etiqueta_box_1")
var check_etiqueta_box_1 = document.querySelector(".check_etiqueta_box_1")
var etiqueta_box_1 = document.getElementById("etiqueta_box_1")
var box_1_confirmar_2 = document.getElementById("box_1_confirmar_2")
var input_cliente = document.getElementById("input_cliente")
var input_code_pedido = document.getElementById("input_code_pedido")
var input_embarque = document.getElementById("input_embarque")
var input_cx_branca = document.getElementById("input_cx_branca")
var peso_maior_etiqueta_box_1 = document.getElementById("peso_maior_etiqueta_box_1")
var peso_menor_etiqueta_box_1 = document.getElementById("peso_menor_etiqueta_box_1")
var receita_etiqueta_box_1 = document.getElementById("receita_etiqueta_box_1")
var peso_etiqueta_box_1 = document.getElementById("peso_etiqueta_box_1")
var cliente_etiqueta_box_1 = document.getElementById("cliente_etiqueta_box_1")
var embarque_number_box_1 = document.getElementById("embarque_number_box_1")
var cx_branca_number_box_1 = document.getElementById("cx_branca_number_box_1")
var cx_branca = document.getElementById("cx_branca")

// Box_2_ps - variaveis

var box_2 = document.getElementById("box_2")
var spanclassadd_box_2 = document.getElementById("spanclassadd_box_2")
var box_2_inputs = document.getElementById("box_2_inputs")
var box_2_voltar =document.getElementById("box_2_voltar")
var box_2_confirmar = document.getElementById('box_2_confirmar');
var input_quantity_box_2 = document.getElementById("input_quantity_box_2")
var box_2_etiqueta = document.getElementById("box_2_etiqueta")
var redefinir_etiqueta_box_2 = document.getElementById("redefinir_etiqueta_box_2")
var material_code_etiqueta_box_2 = document.getElementById("material_code_etiqueta_box_2")
var material_etiqueta_box_2 = document.getElementById("material_etiqueta_box_2")
var input_quantity_box_2 = document.getElementById("input_quantity_box_2")
var quantity_etiqueta_box_2 = document.getElementById("quantity_etiqueta_box_2")
var receita_number_etiqueta_box_2 = document.getElementById("receita_number_etiqueta_box_2")
var peso_number_etiqueta_box_2 = document.getElementById("peso_number_etiqueta_box_2")
var peso_maior_number_etiqueta_box_2 = document.getElementById("peso_maior_number_etiqueta_box_2")
var peso_menor_number_etiqueta_box_2 = document.getElementById("peso_menor_number_etiqueta_box_2")
var passando_etiqueta_box_2 = document.getElementById("passando_etiqueta_box_2")
var concluir_etiqueta_box_2 = document.getElementById("concluir_etiqueta_box_2")
var check_etiqueta_box_2 = document.querySelector(".check_etiqueta_box_2")
var etiqueta_box_2 = document.getElementById("etiqueta_box_2")
var next_etiqueta_box_2 = document.getElementById("next_etiqueta_box_2")
var redefinir_2_etiqueta_box_2 = document.getElementById("redefinir_2_etiqueta_box_2")

// Box_3_ps - variaveis

var box_3 = document.getElementById("box_3")
var spanclassadd_box_3 = document.getElementById("spanclassadd_box_3")
var box_3_inputs = document.getElementById("box_3_inputs")
var box_3_voltar =document.getElementById("box_3_voltar")
var box_3_confirmar = document.getElementById('box_3_confirmar');
var input_quantity_box_3 = document.getElementById("input_quantity_box_3")
var box_3_etiqueta = document.getElementById("box_3_etiqueta")
var redefinir_etiqueta_box_3 = document.getElementById("redefinir_etiqueta_box_3")
var material_code_etiqueta_box_3 = document.getElementById("material_code_etiqueta_box_3")
var material_etiqueta_box_3 = document.getElementById("material_etiqueta_box_3")
var input_quantity_box_3 = document.getElementById("input_quantity_box_3")
var quantity_etiqueta_box_3 = document.getElementById("quantity_etiqueta_box_3")
var receita_number_etiqueta_box_3 = document.getElementById("receita_number_etiqueta_box_3")
var peso_number_etiqueta_box_3 = document.getElementById("peso_number_etiqueta_box_3")
var peso_maior_number_etiqueta_box_3 = document.getElementById("peso_maior_number_etiqueta_box_3")
var peso_menor_number_etiqueta_box_3 = document.getElementById("peso_menor_number_etiqueta_box_3")
var passando_etiqueta_box_3 = document.getElementById("passando_etiqueta_box_3")
var concluir_etiqueta_box_3 = document.getElementById("concluir_etiqueta_box_3")
var check_etiqueta_box_3 = document.getElementById("check_etiqueta_box_3")
var etiqueta_box_3 = document.getElementById("etiqueta_box_3")
var next_etiqueta_box_3 = document.getElementById("next_etiqueta_box_3")
var circle_box_3 = document.getElementById("circle_box_3")

// Box_4_ps - variaveis

var box_4 = document.getElementById("box_4")

// Connections_ps - variaveis

var box_ps_connections = document.getElementById("box_ps_connections")
var connection_1 = document.getElementById("connection_1")
var connection_2 = document.getElementById("connection_2")
var connection_3 = document.getElementById("connection_3")

// Box_1_comercio - variaveis

var boxes_comercio = document.getElementById("boxes_comercio")
var com_box_1 = document.getElementById("com_box_1")
var spanclassadd_com_box_1 = document.getElementById("spanclassadd_com_box_1")



//-------------------------------------------------------------------//



// Login - functions

entrar_button.addEventListener("click", function() {
    var userlogin = login_input.value;
    var passwordlogin = senha_input.value;

    if (userlogin === 'arthur' && passwordlogin === '192637') {
        login_page.style.display = "none"
        login_success.style.display = "block"
    } else {
        error_message.style.display = "block"
    }
});

login_input.addEventListener("click", function() {
    login_input.style.borderColor = "#ff6702"
    login.style.color = "#ff6702"
    senha_input.style.borderColor = "black"
    senha.style.color = "black"
})

senha_input.addEventListener("click", function () {
    senha_input.style.borderColor = "#ff6702"
    senha.style.color = "#ff6702"
    login_input.style.borderColor = "black"
    login.style.color = "black"
})

// Menu - functions

ps.addEventListener("click", function() {
    ps.style.color = "#ff6702"
    comercio.style.color = "black"
    boxes_ps.style.display = "block"
    box_ps_connections.style.display = "block"
    com_box_1.style.display = "none"
})

comercio.addEventListener("click", function() {
    comercio.style.color = "#ff6702"
    ps.style.color = "black"
    boxes_ps.style.display = "none"
    box_ps_connections.style.display = "none"
    com_box_1.style.display = "block"
})

// Box_1 Buttons

addbutton.addEventListener('click', function() {
    addbutton.style.visibility = "hidden"
    box_1.style.backgroundColor = "#FFFFFF"
    box_1_inputs.style.display = "flex"
    concluido_etiqueta_box_1.style.visibility = "hidden"
    passando_etiqueta_box_2.style.visibility = "hidden"
    box_3_etiqueta.style.visibility = "hidden"
});

box_1_voltar.addEventListener("click", function(){
    addbutton.style.visibility = "visible"
    box_1_inputs.style.display = "none"
    box_1.style.backgroundColor = "#ff6702"
})

redefinir_etiqueta_box_1.addEventListener("click", function () {
    box_1_inputs.style.display = "flex"
    box_1_etiqueta.style.display = "none"
})

box_1_confirmar.addEventListener('click', function() {
            var input_material_code = document.getElementById('input_material_code').value;
            var input_quantity = document.getElementById('input_quantity').value;
            var input_cliente = document.getElementById("input_cliente").value
            var input_code_pedido = document.getElementById("input_code_pedido").value
            var input_embarque = document.getElementById("input_embarque").value
            var input_cx_branca = document.getElementById("input_cx_branca").value
            
            // Verifica se o código está presente no objeto materialcodesystem
            if(materialcodesystem[input_material_code]) {
              
                if (input_cliente.trim() !== "") {

                    if (input_embarque.trim() || input_cx_branca.trim()) {
                        var cliente_b_1 = document.getElementById("input_cliente").value
                    var code_pedido_b_1 = document.getElementById("input_code_pedido").value

                    if (input_cx_branca.trim() !== "") {
                        cx_branca.style.visibility = "visible"
                        embarque_box_1.style.left = "60px"
                    } else {
                        cx_branca.style.visibility = "hidden"
                        embarque_box_1.style.left = "130px"
                    }

                    if (input_embarque.trim() !== "") {
                        embarque_box_1.style.visibility = "visible"
                        cx_branca.style.left = "200px"
                    } else {
                        embarque_box_1.style.visibility = "hidden"
                        cx_branca.style.left = "130px"
                    }

                    box_1.style.height = "245px"
                    redefinir_etiqueta_box_1.style.top = "188px"
                    concluir_etiqueta_box_1.style.top = "188px"
                    peso_maior_etiqueta_box_1.style.visibility = "hidden"
                    peso_maior_number_etiqueta_box_1.style.visibility = "hidden"
                    peso_menor_etiqueta_box_1.style.visibility = "hidden"
                    peso_menor_number_etiqueta_box_1.style.visibility = "hidden"
                    peso_number_etiqueta_box_1.textContent = materialcodesystem[input_material_code].peso_especial
                    receita_etiqueta_box_1.style.left = "28px"
                    peso_etiqueta_box_1.style.left = "160px"
                    peso_etiqueta_box_1.style.top = "95px"
                    cliente_etiqueta_box_1.style.display = "block"
                    cliente_etiqueta_box_1.style.color = "#31a8df"
                    cliente_etiqueta_box_1.style.letterSpacing = "0.5px"
                    embarque_box_1.style.display = "block"
                    cliente_etiqueta_box_1.textContent = cliente_b_1 + " " + "/" + " " + code_pedido_b_1
                    embarque_number_box_1.textContent = input_embarque
                    cx_branca.style.display = "block"
                    cx_branca_number_box_1.textContent = input_cx_branca
                    concluido_etiqueta_box_1.style.top = "191px"
                } else {
                    alert ("Quantidade do pedido especial não informada, tente novamente.")
                    box_1.style.height = "220px"
                    redefinir_etiqueta_box_1.style.top = "157px"
                    concluir_etiqueta_box_1.style.top = "157px"
                    peso_maior_etiqueta_box_1.style.visibility = "visible"
                    peso_maior_number_etiqueta_box_1.style.visibility = "visible"
                    peso_menor_etiqueta_box_1.style.visibility = "visible"
                    peso_menor_number_etiqueta_box_1.style.visibility = "visible"
                    peso_number_etiqueta_box_1.textContent = materialcodesystem[input_material_code].peso
                    receita_etiqueta_box_1.style.left = "137px"
                    peso_etiqueta_box_1.style.left = "20px"
                    peso_etiqueta_box_1.style.top = "120px"
                    cliente_etiqueta_box_1.style.display = "none"
                    embarque_box_1.style.display = "none"
                    cx_branca.style.display = "none"
                }
                    } 

                // Se estiver presente, atualiza o conteúdo do elemento <p> com o código digitado e o material correspondente
              box_1.style.borderColor = "#38c0ff"
              box_1.style.borderWidth = "4px"
              box_1.style.borderStyle = "Solid"
              box_1_inputs.style.display = "none";
              box_1.style.backgroundColor = "#FFFFFF";
              box_2.style.visibility = "visible";
              connection_1.style.display = "flex";
              spanclassadd_box_2.style.marginLeft = "0px";
              material_code_etiqueta_box_1.textContent = input_material_code;
              material_etiqueta_box_1.textContent = materialcodesystem[input_material_code].material; // Corrigido aqui
              document.getElementById("quantity_etiqueta_box_1").textContent = input_quantity;
              receita_number_etiqueta_box_1.textContent = materialcodesystem[input_material_code].receita;
              peso_maior_number_etiqueta_box_1.textContent = materialcodesystem[input_material_code].peso_maior
              peso_menor_number_etiqueta_box_1.textContent = materialcodesystem[input_material_code].peso_menor
              check_etiqueta_box_1.style.visibility = "hidden"
              box_1_etiqueta.style.display = "block"
            } else {
              alert("Código não encontrado no sistema.");
            }
          });

concluir_etiqueta_box_1.addEventListener("click", function () {

    // Exibe uma caixa de diálogo com a mensagem e os botões OK e Cancelar
    var confirmation = confirm("Após clicar em OK, não será mais possível fazer alterações na etiqueta. Tem certeza que deseja continuar?");

    // Verifica se o usuário clicou em OK (true) ou em Cancelar (false)
    if (confirmation) {
        // Se o usuário clicou em OK, execute a função de concluir_etiqueta_box_1
        redefinir_etiqueta_box_3.style.borderColor = "#ff5b5b"
        redefinir_etiqueta_box_3.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ff5b5b';
          });
          redefinir_etiqueta_box_3.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
          });
        circle_box_3.style.display = "none"
        passando_etiqueta_box_3.style.visibility = "hidden"
        material_code_etiqueta_box_3.style.borderColor = "#ff5b5b"
        check_etiqueta_box_1.style.visibility = "visible";
        passando_etiqueta_box_1.style.visibility = "hidden";
        material_code_etiqueta_box_1.style.backgroundColor = "#5bff6a";
        redefinir_etiqueta_box_1.style.visibility = "hidden";
        concluir_etiqueta_box_1.style.visibility = "hidden";
        concluido_etiqueta_box_1.style.visibility = "visible"
        material_code_etiqueta_box_2.style.backgroundColor = "#38c0ff"
        material_code_etiqueta_box_2.style.border = "none"
        box_1.style.border = "none"
        box_2.style.borderColor = "#38c0ff"
        box_2.style.borderWidth = "4px"
        box_2.style.borderStyle = "Solid"
        passando_etiqueta_box_2.style.visibility = "visible"
        concluir_etiqueta_box_2.style.visibility = "visible"
        concluir_etiqueta_box_2.style.borderColor = "#38c0ff"
        redefinir_etiqueta_box_2.style.left = "23px"
        redefinir_etiqueta_box_2.style.borderColor = "#38c0ff"
        redefinir_etiqueta_box_2.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#38c0ff';
          });
          redefinir_etiqueta_box_2.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
          });
        next_etiqueta_box_2.style.visibility = "hidden"
        next_etiqueta_box_3.style.visibility = "visible"
        material_code_etiqueta_box_3.style.borderColor = "#ff5b5b"
        cliente_etiqueta_box_1.style.color = "#4bd657"
    } else {
        // Se o usuário clicou em Cancelar, não faça nada
        return;
    }

})

concluir_etiqueta_box_1.addEventListener("click", function(event) {
        event.preventDefault();
        var input_quantity = document.getElementById("input_quantity");
        var valor = input_quantity.value.trim();
        if (valor !== "") {
            ps_quant_font2.textContent = valor;
            total_production.textContent = valor;
        }
    });


// Box_2 buttons

spanclassadd_box_2.addEventListener('click', function() {
    spanclassadd_box_2.style.visibility = "hidden"
    box_2.style.backgroundColor = "#FFFFFF"
    box_2_inputs.style.display = "flex"
    concluido_etiqueta_box_2.style.visibility = "hidden"
});

box_2_voltar.addEventListener("click", function(){
    spanclassadd_box_2.style.visibility = "visible"
    box_2_inputs.style.display = "none"
    box_2.style.backgroundColor = "#ff6702"
})

redefinir_etiqueta_box_2.addEventListener("click", function () {
    box_2_inputs.style.display = "flex"
    box_2_confirmar.style.visibility = "visible"
    box_2_etiqueta.style.display = "none"
})

box_2_confirmar.addEventListener('click', function() {

    var input_material_code_box_2 = document.getElementById('input_material_code_box_2').value;
    var input_quantity_box_2 = document.getElementById('input_quantity_box_2').value;
            
            // Verifica se o código está presente no objeto materialcodesystem
            if(materialcodesystem[input_material_code_box_2]) {
            // Se estiver presente, atualiza o conteúdo do elemento <p> com o código digitado e o material correspondente
            box_2_etiqueta.style.display = "block"  
            box_2_inputs.style.display = "none";
              box_2.style.backgroundColor = "#FFFFFF";
              material_code_etiqueta_box_2.textContent = input_material_code_box_2;
              material_etiqueta_box_2.textContent = materialcodesystem[input_material_code_box_2].material; // Corrigido aqui
              document.getElementById("quantity_etiqueta_box_2").textContent = input_quantity_box_2;
              receita_number_etiqueta_box_2.textContent = materialcodesystem[input_material_code_box_2].receita;
              peso_number_etiqueta_box_2.textContent = materialcodesystem[input_material_code_box_2].peso
              peso_maior_number_etiqueta_box_2.textContent = materialcodesystem[input_material_code_box_2].peso_maior
              peso_menor_number_etiqueta_box_2.textContent = materialcodesystem[input_material_code_box_2].peso_menor
              check_etiqueta_box_2.style.visibility = "hidden"
              connection_2.style.display = "flex"
              box_3.style.visibility = "visible"
              redefinir_2_etiqueta_box_2.style.visibility = "hidden"
            } else {
              // Se não estiver presente, exibe uma mensagem de erro
              alert("Código não encontrado no sistema.");
            }
          });
     

concluir_etiqueta_box_2.addEventListener("click", function() {

    // Exibe uma caixa de diálogo com a mensagem e os botões OK e Cancelar
    var confirmation = confirm("Após clicar em OK, não será mais possível fazer alterações na etiqueta. Tem certeza que deseja continuar?");

    // Verifica se o usuário clicou em OK (true) ou em Cancelar (false)
    if (confirmation) {
        // Se o usuário clicou em OK, execute a função de concluir_etiqueta_box_1
        check_etiqueta_box_2.style.visibility = "visible";
        passando_etiqueta_box_2.style.visibility = "hidden";
        material_code_etiqueta_box_2.style.backgroundColor = "#5bff6a";
        redefinir_etiqueta_box_2.style.visibility = "hidden";
        concluir_etiqueta_box_2.style.visibility = "hidden";
        concluido_etiqueta_box_2.style.visibility = "visible"
        concluido_etiqueta_box_2.style.visibility = "visible"
        box_2.style.border = "none"
        box_3.style.borderColor = "#38c0ff"
        box_3.style.borderWidth = "4px"
        box_3.style.borderStyle = "Solid"
        passando_etiqueta_box_3.style.visibility = "visible"
        concluir_etiqueta_box_3.style.visibility = "visible"
        concluir_etiqueta_box_3.style.borderColor = "#38c0ff"
        redefinir_etiqueta_box_3.style.left = "23px"
        redefinir_etiqueta_box_3.style.borderColor = "#38c0ff"
        next_etiqueta_box_3.style.visibility = "hidden"
        material_code_etiqueta_box_3.style.backgroundColor = "#38c0ff"
        material_code_etiqueta_box_3.style.border = "none"
        redefinir_etiqueta_box_3.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#38c0ff';
          });
          redefinir_etiqueta_box_3.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
          });
        redefinir_2_etiqueta_box_2.style.visibility = "hidden"
    } else {
        // Se o usuário clicou em Cancelar, não faça nada
        return;
    }

})

concluir_etiqueta_box_2.addEventListener("click", function(event) {
    event.preventDefault();
    var input_quantity = document.getElementById("input_quantity").value.trim();
    var input_quantity_box_2 = document.getElementById("input_quantity_box_2").value.trim();
    var valor = parseInt(input_quantity) + parseInt(input_quantity_box_2); // Convertendo para números e somando
    if (!isNaN(valor)) { // Verifica se a soma é um número
        ps_quant_font2.textContent = valor;
        total_production.textContent = valor;
    }
});

// Box_3 buttons 

spanclassadd_box_3.addEventListener('click', function() {
    spanclassadd_box_3.style.visibility = "hidden"
    box_3.style.backgroundColor = "#FFFFFF"
    box_3_inputs.style.display = "flex"
    concluido_etiqueta_box_3.style.visibility = "hidden"

});

box_3_voltar.addEventListener("click", function(){
    spanclassadd_box_3.style.visibility = "visible"
    box_3_inputs.style.display = "none"
    box_3.style.backgroundColor = "#ff6702"
})

redefinir_etiqueta_box_3.addEventListener("click", function () {
    box_3_etiqueta.style.display = "none"
    box_3_inputs.style.display = "flex"
})

box_3_confirmar.addEventListener('click', function() {

    var input_material_code_box_3 = document.getElementById('input_material_code_box_3').value;
    var input_quantity_box_3 = document.getElementById('input_quantity_box_3').value;
            
            // Verifica se o código está presente no objeto materialcodesystem
            if(materialcodesystem[input_material_code_box_3]) {
              // Se estiver presente, atualiza o conteúdo do elemento <p> com o código digitado e o material correspondente
              box_3_etiqueta.style.visibility = "visible";
              box_3_inputs.style.display = "none";
              box_3.style.backgroundColor = "#FFFFFF";
              material_code_etiqueta_box_3.textContent = input_material_code_box_3;
              material_etiqueta_box_3.textContent = materialcodesystem[input_material_code_box_3].material; // Corrigido aqui
              document.getElementById("quantity_etiqueta_box_3").textContent = input_quantity_box_3;
              receita_number_etiqueta_box_3.textContent = materialcodesystem[input_material_code_box_3].receita;
              peso_number_etiqueta_box_3.textContent = materialcodesystem[input_material_code_box_3].peso
              peso_maior_number_etiqueta_box_3.textContent = materialcodesystem[input_material_code_box_3].peso_maior
              peso_menor_number_etiqueta_box_3.textContent = materialcodesystem[input_material_code_box_3].peso_menor
              check_etiqueta_box_3.style.visibility = "hidden"
              connection_3.style.display = "flex"
              box_4.style.visibility = "visible"
              box_3_etiqueta.style.display = "block"

            } else {
              // Se não estiver presente, exibe uma mensagem de erro
              alert("Código não encontrado no sistema.");
            }
          });

concluir_etiqueta_box_3.addEventListener("click", function () {

    // Exibe uma caixa de diálogo com a mensagem e os botões OK e Cancelar
    var confirmation = confirm("Após clicar em OK, não será mais possível fazer alterações na etiqueta. Tem certeza que deseja continuar?");

    // Verifica se o usuário clicou em OK (true) ou em Cancelar (false)
    if (confirmation) {
        // Se o usuário clicou em OK, execute a função de concluir_etiqueta_box_1
        check_etiqueta_box_3.style.visibility = "visible";
        passando_etiqueta_box_3.style.visibility = "hidden";
        material_code_etiqueta_box_3.style.backgroundColor = "#5bff6a";
        redefinir_etiqueta_box_3.style.visibility = "hidden";
        concluir_etiqueta_box_3.style.visibility = "hidden";
        concluido_etiqueta_box_3.style.visibility = "visible"
        concluido_etiqueta_box_3.style.visibility = "visible"
        box_3.style.border = "none"
        
    } else {
        // Se o usuário clicou em Cancelar, não faça nada
        return;
    }

})

concluir_etiqueta_box_3.addEventListener("click", function(event) {
    event.preventDefault();
    var input_quantity = document.getElementById("input_quantity").value.trim();
    var input_quantity_box_2 = document.getElementById("input_quantity_box_2").value.trim();
    var input_quantity_box_3 = document.getElementById("input_quantity_box_3").value.trim();
    var valor = parseInt(input_quantity) + parseInt(input_quantity_box_2) + parseInt(input_quantity_box_3); // Convertendo para números e somando
    if (!isNaN(valor)) { // Verifica se a soma é um número
        ps_quant_font2.textContent = valor;
        total_production.textContent = valor;
    }
});