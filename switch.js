function escolherPersonagem(personagem){
    const description = document.getElementById('description');

    switch(personagem){
        case 'Chase':
            description.textContent = 'Usando seu caminhão da polícia e megafone, este pastor-alemão é um dos personagens cachorros da Patrulha Canina, cujas características são a de ser um líder natural e atlético que gosta de assumir o comando. Chase tem seu lado brincalhão quando não está em missão, mas quando é hora de trabalhar, ele é um exemplo de responsabilidade, seriedade e foco. O doguinho também é reconhecido por sua inteligência e força, e adora resolver problemas.Seu único problema são os gatinhos. Não porque ele não gosta deles, mas porque ele é alérgico a gatos e penas. Vale destacar que Chase tem uma queda por Skye e essa quedinha é recíproca. Aliás, os fãs da série adoram ver os dois juntos e em diversos episódios eles passam bastante tempo unidos em missões. Inclusive, sempre que preciso, Chase salva Skye e se preocupa com ela. O lema de Chase é: “O Chase está no caso”.';
            break;
        case 'Marshall':
            description.textContent = 'Do quartel para seu carro de bombeiros, outro personagem da Patrulha Canina é Marshall, um dálmata super ativo, animado e também o mais desajeitado do grupo. Sua personalidade superdivertida é sempre bem-vinda por seus amigos. Ele ama brincar, fazer piadas e se divertir. O cãozinho é muito simpático e amigável e está sempre pronto para ajudar – tá certo que às vezes ele comete umas boas trapalhadas, mas é assim que acaba arrancando boas risadas de quem está em casa. Os filhotes sempre vão ouvi-lo dizer: “Eu estou bem!”. Seu lema é: “Pronto para um resgate”.';
            break;
        case 'Zuma':
            description.textContent = 'Amigo da água, este Labrador Chocolate gosta de rir e surfar. Zuma, da Patrulha Canina, é muito esportivo, inclusive é um dos mais ativos do grupo e está sempre pronto para uma boa aventura. Ótimo nadador e mergulhador, Zuma é o personagem da Patrulha Canina que está sempre a postos quando o assunto envolve água. Suas características que se destacam são a tranquilidade e determinação do cãozinho. Zuma vai em busca de novas aventuras em seu bote inflável, que também se transforma em um submarino quando necessário. Seu lema é: “Vamos mergulhar” e também “Preparar, apontar, se molhar!”.';
            break;
        case 'Rubble':
            description.textContent = 'À primeira vista esse personagem da Patrulha Canina parece um pouco rude, mas na verdade ele é um Bulldog Inglês adorável que sabe tudo sobre skates e pranchas de snowboard. Com seu pelo curto e coloração marrom e branca, ele é considerado o mais forte da equipe. Mas não se engane pela pose de cão bravo, Rubble é simpático, brincalhão e amigável. Sempre que precisa ele está pronto para salvar um amigo e ajudar. O personagem dirige um trator amarelo cheio de ferramentas, o que gera identificação com várias crianças. E, claro, as usa sempre em seu serviço! Não há trabalho que sua escavadora de construção não seja capaz de fazer. Seu lema é: “Rubble está a postos”.';
            break;
        case 'Skye':
            description.textContent = 'Skye é uma Cockapoo, raça que é resultado do cruzamento de cães Poodle e Cocker Spaniel, por isso, ela é peludinha e com orelhas bem compridas. Quanto à sua personalidade, a doguinha é destemida, inteligente e muita aventureira. Não à toa ela é um cão de resgate e adora voar em seu helicóptero ou com as asas de sua mochila.  Ao olhar para o rosto de Skye, dá para ver que ela é uma fofa. E essa personalidade dócil a qual aparenta também se reflete na realidade. Ela tenta de tudo com jeitinho, graça e um belo sorriso.  Skye é uma personagem da Patrulha Canina que está sempre pronta para salvar qualquer um que estiver em perigo! Seu lema é: “Vamos levantar voo” e “Esse filhote vai voar!”.';
            break;
        case 'Rocky':
            description.textContent = 'O filhote vira-lata que sempre tem recursos úteis, Rocky também faz parte dos personagens da Patrulha Canina . Ele é o rei do improviso e da criatividade e costuma ser sempre muito habilidoso. Ele é um cão entusiasmado com reciclagem e que tem mil ideias e ferramentas dentro de sua mochila. O dom de Rocky é conseguir pensar em soluções rápidas para ajudar seus amigos e companheiros. Não seria ótimo se as nossas crianças se inspirarem nessa personalidade para resolver os problemas do dia a dia? Bem, provavelmente eles se inspiram mais do que imaginamos! Mas Rocky também tem suas inseguranças e por isso a água é sua pior inimiga. Ele costuma ficar longe dela, pois não gosta de ficar molhado. Os lemas deste personagem da Patrulha Canina são: “Verde quer dizer Siga” e “Não perca, reutilize”.';
            break;
            case 'Everest':
            description.textContent = 'A divertida filhote Husky Siberiana é um dos novos personagens da Patrulha Canina. Se você parar para notar, a cadelinha tem o nome da montanha mais alta desafiadora e cheia de neve do mundo: o Everest. Ela é um dos nomes dos cachorros da Patrulha Canina da neve e faz honra a como lhe chamam! Isso porque, assim como Skye, Everest também é um cão de resgate, mas ela é especializada em neve. Ela vive com Jake em sua montanha de neve e ama ‘barriga-tobogganing’, deslizando para baixo usando sua barriga. Gelo ou neve, ela ama deslizar! Para Everest, não importa o tempo e nem as condições climáticas, ela está sempre pronta para o resgate e para oferecer as suas habilidades. A filhote é muito ágil, esperta e consegue chegar a lugares de difícil acesso. Seu lema é “Geando ou Nevando, já estou chegando”.';
            break;
            case 'Tracker':
            description.textContent = 'Tracker também é um dos novos personagens da Patrulha Canina e ele se caracteriza por ser um Chihuahua bastante divertido. Embora seja corajoso, ele não gosta de ficar no escuro. Seu lema é “Eu sou todo ouvidos”.';
            break;
        default:
            description.textContent = 'Personagem não encontrado.';
    }
}