<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stam System</title>
    <link rel="icon" type="image/x-icon" href="stamfavicon.ico">
    <link rel="stylesheet" href="style1.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>

<section id="login_page">

    <img id="stamlogowhite" src="stamlogoblack.png" alt="">
    <p id="login_frase">Em meio às adversidades, encontrar a chave certa <br>é o que nos diferencia.</p>
    <p id="bemvindo">SEJA BEM-VINDO!</p>

    <ul id="login_area">
        <p id="login_p">Login</p>
        <p id="login">Login</p>
        <li><input id="login_input" type="text" autocomplete="off"></li>
        <p id="senha">Senha</p>
        <li><input id="senha_input" type="password"></li>
        <p id="error_message">Login ou senha inválidos.</p>
        <li><button id="entrar_button">Entrar</button></li>
    </ul>
    
</section>

<section id="login_success">

    <div class = "logostam">
        <img src="stam.svg" alt="">
    </div>

<div class="navegação">

    <ul class="navbar">
        <li class="comercio" id="comercio">Comércio</li>
        <li class="ps" id="ps">PS</li>
        <li class="data">10/03/2024</li>
        <li class="comercio_quant_especial">Comércio: <span class="com_quant_font2"></span></li>
        <li>PS: <span class="ps_quant_font2" id="ps_quant_font2"></span></li>
        <li>Total: <span id="total_production"></span></li>
        <div class="user">
            <span class="material-symbols-outlined">account_circle</span>
        </div>
        
    </ul>

    <p class="segundoturno">2º Turno</p>

</div>

<section id="boxes_ps">

<!-- Box_1 -->

    <div class="box_1" id="box_1">

        <div id="box_1_etiqueta">

            <div class="check_etiqueta_box_1">
                <span class="material-symbols-outlined">check_circle</span>
            </div>

            <div class="passando_etiqueta_box_1" id="passando_etiqueta_box_1">
                <span class="material-symbols-outlined">change_circle</span>
            </div>

            <div id="etiqueta_box_1">
                <p id="material_code_etiqueta_box_1">00000</p>
                <p id="quantity_etiqueta_box_1">000</p>
                <p id="material_etiqueta_box_1">803453</p>
                <p id="receita_etiqueta_box_1">Receita: <span id="receita_number_etiqueta_box_1">999</span></p>
                <p id="peso_etiqueta_box_1">Peso: <span id="peso_number_etiqueta_box_1">999</span></p>
                <p id="peso_maior_etiqueta_box_1">Maior: <span id="peso_maior_number_etiqueta_box_1">999</span></p>
                <p id="peso_menor_etiqueta_box_1">Menor: <span id="peso_menor_number_etiqueta_box_1">999</span></p>
            </div>

            <button id="redefinir_etiqueta_box_1">Redefinir</button>
            <button id="concluir_etiqueta_box_1">Concluir</button>
            <button id="concluido_etiqueta_box_1">Concluído</button>

        </div>

        <div class="box_1_inputs" id="box_1_inputs">

            <input class="input_material_code" id="input_material_code" type="text" placeholder="Código">
            <input class="input_quantity" id="input_quantity" type="text" placeholder="Quantidade">
            <input class="input_cliente" type="text" placeholder="Cliente">
            <input class="input_code_pedido" id="input_quantity" type="text" placeholder="Cód. pedido">
            <input class="input_embarque" type="text" placeholder="Embarque">
            <input class="input_cx_branca" id="input_quantity" type="text" placeholder="Cx. branca">

            <button class="box_1_voltar" id="box_1_voltar">Voltar</button>
            <button class="box_1_confirmar" id="box_1_confirmar">Confirmar</button>
            <button class="box_1_confirmar_2" id="box_1_confirmar_2">Confirmar</button>

        </div>

        <div class="spanclassadd">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>

<!-- Box_2 -->
    
    <div class="box_2" id="box_2">

        <div class="spanclassadd_box_2" id="spanclassadd_box_2">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>

        <div id="box_2_etiqueta">

            <div class="check_etiqueta_box_2">
                <span class="material-symbols-outlined">check_circle</span>
            </div>

            <div class="passando_etiqueta_box_2" id="passando_etiqueta_box_2">
                <span class="material-symbols-outlined">change_circle</span>
            </div>

            <div class="next_etiqueta_box_2" id="next_etiqueta_box_2">
                <span class="material-symbols-outlined">arrow_circle_right</span>
            </div>

            <div id="etiqueta_box_2">
                <p id="material_code_etiqueta_box_2">00000</p>
                <p id="quantity_etiqueta_box_2">000</p>
                <p id="material_etiqueta_box_2">803453</p>
                <p id="receita_etiqueta_box_2">Receita: <span id="receita_number_etiqueta_box_2">999</span></p>
                <p id="peso_etiqueta_box_2">Peso: <span id="peso_number_etiqueta_box_2">999</span></p>
                <p id="peso_maior_etiqueta_box_2">Maior: <span id="peso_maior_number_etiqueta_box_2">999</span></p>
                <p id="peso_menor_etiqueta_box_2">Menor: <span id="peso_menor_number_etiqueta_box_2">999</span></p>
            </div>

            <button id="redefinir_etiqueta_box_2">Redefinir</button>
            <button id="concluir_etiqueta_box_2">Concluir</button>
            <button id="concluido_etiqueta_box_2">Concluído</button>

        </div>

        <div class="box_2_inputs" id="box_2_inputs">

            <input class="input_material_code_box_2" id="input_material_code_box_2" type="text" placeholder="Código">
            <input class="input_quantity_box_2" id="input_quantity_box_2" type="text" placeholder="Quantidade">
            <input class="input_cliente_box_2" type="text" placeholder="Cliente">
            <input class="input_code_pedido_box_2" id="input_quantity_box_2" type="text" placeholder="Cód. pedido">
            <input class="input_embarque_box_2" type="text" placeholder="Embarque">
            <input class="input_cx_branca_box_2" id="input_quantity_box_2" type="text" placeholder="Cx. branca">

            <button class="box_2_voltar" id="box_2_voltar">Voltar</button>
            <button class="box_2_confirmar" id="box_2_confirmar">Confirmar</button>

        </div>

    </div>

<!-- Box_3 -->

    <div class="box_3" id="box_3">

        <div class="spanclassadd_box_3" id="spanclassadd_box_3">
            <span class="material-symbols-outlined">add</span>
        </div>

            <div id="box_3_etiqueta">

                <div class="check_etiqueta_box_3" id="check_etiqueta_box_3">
                    <span class="material-symbols-outlined">check_circle</span>
                </div>
                <div class="passando_etiqueta_box_3" id="passando_etiqueta_box_3">
                    <span class="material-symbols-outlined">change_circle</span>
                </div>
                <div class="next_etiqueta_box_3" id="next_etiqueta_box_3">
                    <span class="material-symbols-outlined">arrow_circle_right</span>
                </div>
                <div id="circle_box_3">
                    <span class="material-symbols-outlined">circle</span>
                </div>
                <div id="etiqueta_box_3">
                    <p id="material_code_etiqueta_box_3">00000</p>
                    <p id="quantity_etiqueta_box_3">000</p>
                    <p id="material_etiqueta_box_3">803453</p>
                    <p id="receita_etiqueta_box_3">Receita: <span id="receita_number_etiqueta_box_3">999</span></p>
                    <p id="peso_etiqueta_box_3">Peso: <span id="peso_number_etiqueta_box_3">999</span></p>
                    <p id="peso_maior_etiqueta_box_3">Maior: <span id="peso_maior_number_etiqueta_box_3">999</span></p>
                    <p id="peso_menor_etiqueta_box_3">Menor: <span id="peso_menor_number_etiqueta_box_3">999</span></p>
                </div>

                <button id="redefinir_etiqueta_box_3">Redefinir</button>
                <button id="concluir_etiqueta_box_3">Concluir</button>
                <button id="concluido_etiqueta_box_3">Concluído</button>
            </div>
    
            <div class="box_3_inputs" id="box_3_inputs">
    
                <input class="input_material_code_box_3" id="input_material_code_box_3" type="text" placeholder="Código">
                <input class="input_quantity_box_3" id="input_quantity_box_3" type="text" placeholder="Quantidade">
                <input class="input_cliente_box_3" type="text" placeholder="Cliente">
                <input class="input_code_pedido_box_3" id="input_quantity_box_3" type="text" placeholder="Cód. pedido">
                <input class="input_embarque_box_3" type="text" placeholder="Embarque">
                <input class="input_cx_branca_box_3" id="input_quantity_box_3" type="text" placeholder="Cx. branca">
    
                <button class="box_3_voltar" id="box_3_voltar">Voltar</button>
                <button class="box_3_confirmar" id="box_3_confirmar">Confirmar</button>
    
            </div>

    </div>
    <div class="box_4" id="box_4">
        <div class="spanclassadd_box_4">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_5">
        <div class="spanclassadd_box_5">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_6">
        <div class="spanclassadd_box_6">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_7">
        <div class="spanclassadd_box_7">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_8">
        <div class="spanclassadd_box_8">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_9">
        <div class="spanclassadd_box_9">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_10">
        <div class="spanclassadd_box_10">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_11">
        <div class="spanclassadd_box_11">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_12">
        <div class="spanclassadd_box_12">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_13">
        <div class="spanclassadd_box_13">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_14">
        <div class="spanclassadd_box_14">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_15">
        <div class="spanclassadd_box_15">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_16">
        <div class="spanclassadd_box_16">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_17">
        <div class="spanclassadd_box_17">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_18">
        <div class="spanclassadd_box_18">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_19">
        <div class="spanclassadd_box_19">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_20">
        <div class="spanclassadd_box_20">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_21">
        <div class="spanclassadd_box_21">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_22">
        <div class="spanclassadd_box_22">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_23">
        <div class="spanclassadd_box_23">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_24">
        <div class="spanclassadd_box_24">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_25">
        <div class="spanclassadd_box_25">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_26">
        <div class="spanclassadd_box_26">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_27">
        <div class="spanclassadd_box_27">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_28">
        <div class="spanclassadd_box_28">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_29">
        <div class="spanclassadd_box_29">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_30">
        <div class="spanclassadd_box_30">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_31">
        <div class="spanclassadd_box_31">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_32">
        <div class="spanclassadd_box_32">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_33">
        <div class="spanclassadd_box_33">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_34">
        <div class="spanclassadd_box_34">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_35">
        <div class="spanclassadd_box_35">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_36">
        <div class="spanclassadd_box_36">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_37">
        <div class="spanclassadd_box_37">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class ="box_38">
        <div class="spanclassadd_box_38">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_39">
        <div class="spanclassadd_box_39">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_40">
        <div class="spanclassadd_box_40">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_41">
        <div class="spanclassadd_box_41">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_42">
        <div class="spanclassadd_box_42">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_43">
        <div class="spanclassadd_box_43">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_44">
        <div class="spanclassadd_box_44">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_45">
        <div class="spanclassadd_box_45">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_46">
        <div class="spanclassadd_box_46">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_47">
        <div class="spanclassadd_box_47">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_48">
        <div class="spanclassadd_box_48">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_49">
        <div class="spanclassadd_box_49">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>
    <div class="box_50">
        <div class="spanclassadd_box_50">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>

</section>

<section id="box_ps_connections">

    <div class="connection_1" id="connection_1"></div>
    <div class="connection_2" id="connection_2"></div>
    <div class="connection_3" id="connection_3"></div>
    <div class="connection_4"></div>
    <div class="connection_5"></div>
    <div class="connection_6"></div>
    <div class="connection_7"></div>
    <div class="connection_8"></div>
    <div class="connection_9"></div>
    <div class="connection_10"></div>
    <div class="connection_11"></div>
    <div class="connection_12"></div>
    <div class="connection_13"></div>
    <div class="connection_14"></div>
    <div class="connection_15"></div>
    <div class="connection_16"></div>
    <div class="connection_17"></div>
    <div class="connection_18"></div>
    <div class="connection_19"></div>
    <div class="connection_20"></div>
    <div class="connection_21"></div>
    <div class="connection_22"></div>
    <div class="connection_23"></div>
    <div class="connection_24"></div>
    <div class="connection_25"></div>
    <div class="connection_26"></div>
    <div class="connection_27"></div>
    <div class="connection_28"></div>
    <div class="connection_29"></div>
    <div class="connection_30"></div>
    <div class="connection_31"></div>
    <div class="connection_32"></div>
    <div class="connection_33"></div>
    <div class="connection_34"></div>
    <div class="connection_35"></div>
    <div class="connection_36"></div>
    <div class="connection_37"></div>
    <div class="connection_38"></div>
    <div class="connection_39"></div>
    <div class="connection_40"></div>
    <div class="connection_41"></div>
    <div class="connection_42"></div>
    <div class="connection_43"></div>
    <div class="connection_44"></div>
    <div class="connection_45"></div>
    <div class="connection_46"></div>
    <div class="connection_47"></div>
    <div class="connection_48"></div>
    <div class="connection_49"></div>

</section>

<section id="boxes_comercio">

    <div id="com_box_1">
        <div id="spanclassadd_com_box_1">
            <span class="material-symbols-outlined" id="meuSpan">add</span>
        </div>
    </div>

</section>

</section>

</body>
<script src="script.js"></script>
</html>