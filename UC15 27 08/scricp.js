const estado = prompt('Estado de destino (sigla) :\n'+ 'Ex: RN, SP, RS, AM' )?.toUpperCase().trim();

let fretr = 0;
let regiao = '';
let prazo = '';

switch (estado) {
 case 'RN':
 case 'CE':
 case 'PB':
 case 'PE':
 case 'MA': 
 case 'PI':
 case 'Al':
case 'SE': 
case 'BA':
    regiao = 'Nordeste';
    frete  = 15;
    prazo  = '3 dias uteis';
    
    break;

    case 'SP':
    case 'RJ':
    case 'MG':
    case 'ES':
        regiao = 'Sudeste';
        frete  = 25;
        prazo  = '5 dias uteis';

        break;

    case 'RS':
    case 'SC':
    case 'PR':
        regiao = 'Sul';
        frete  = 30;
        prazo  = '7 dias uteis';
        break;

    case 'Am':
    case 'PA':
    case 'MT':
    case 'MS':
    case 'DF':
        regiao = 'centro-oeste';
        frete  = 35;
        prazo  = '8 dias uteis';
        break;

    case 'AM':
    case 'PA':
    case 'AC':
    case 'RO'
    case 'RR':
    case 'AP'
    case 'TO':
        regiao = 'Norte';
        frete  = 45;
        prazo  = '12 dias uteis';
        break;

    default:
        regiao ='Estado nao encontrado';
        frete = 0;
        prazo  = 'indisponivel';

} 

if (frete > 0) {
  alerte (
      'Estado: ${estado}\n' +
      'regiao ${regiao}\n' +
      'frete: R$ ${frete},00\n' +
      'prazo: ${prazo}'

  );
  console.log ({estadp , regiao, frete, prazo });
} else {
    alert('Estado "${estadp}"'nao encontrado.\nverifique a sigla e tente novamente)





}