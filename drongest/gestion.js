var ABIGDron = [
    {
      "constant": true,
      "inputs": [],
      "name": "pesticidasAceptados",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "parcelacount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "droncount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokendron",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "idparcela",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "iddron",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "factura",
          "type": "uint256"
        }
      ],
      "name": "ParcelaFumigada",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "TrabajoSolicitado",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_nuevoPesticida",
          "type": "string"
        }
      ],
      "name": "nuevoPesticida",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_min",
          "type": "uint256"
        },
        {
          "name": "_max",
          "type": "uint256"
        },
        {
          "name": "_pesticida",
          "type": "uint256"
        },
        {
          "name": "_preciom2",
          "type": "uint256"
        }
      ],
      "name": "registrarDron",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_min",
          "type": "uint256"
        },
        {
          "name": "_max",
          "type": "uint256"
        },
        {
          "name": "_pesticida",
          "type": "uint256"
        },
        {
          "name": "_m2",
          "type": "uint256"
        },
        {
          "name": "_preciomaxm2",
          "type": "uint256"
        }
      ],
      "name": "registrarParcela",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getnombrepesticidaporid",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_nombre",
          "type": "string"
        }
      ],
      "name": "getidpesticidapornombre",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "obtenerBono",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_idParcela",
          "type": "uint256"
        }
      ],
      "name": "solicitarTrabajo",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_idParcela",
          "type": "uint256"
        },
        {
          "name": "min",
          "type": "uint256"
        },
        {
          "name": "max",
          "type": "uint256"
        },
        {
          "name": "pesticida",
          "type": "uint256"
        },
        {
          "name": "m2",
          "type": "uint256"
        },
        {
          "name": "preciomaxm2",
          "type": "uint256"
        }
      ],
      "name": "modificarParcela",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_idParcela",
          "type": "uint256"
        },
        {
          "name": "_idDron",
          "type": "uint256"
        }
      ],
      "name": "fumigar",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getparcelas",
      "outputs": [
        {
          "name": "idParcela",
          "type": "uint256"
        },
        {
          "name": "propietarioParcela",
          "type": "address"
        },
        {
          "name": "min",
          "type": "uint256"
        },
        {
          "name": "max",
          "type": "uint256"
        },
        {
          "name": "pesticida",
          "type": "uint256"
        },
        {
          "name": "m2",
          "type": "uint256"
        },
        {
          "name": "preciomaxm2",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getmapdrones",
      "outputs": [
        {
          "name": "idDron",
          "type": "uint256"
        },
        {
          "name": "empresaPropietaria",
          "type": "address"
        },
        {
          "name": "_min",
          "type": "uint256"
        },
        {
          "name": "_max",
          "type": "uint256"
        },
        {
          "name": "_pesticida",
          "type": "uint256"
        },
        {
          "name": "_preciom2",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
var ABITDron = [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "_allowed",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFromOrigin",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowanceOrigin",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "_mint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
var GestionDron, TokenDron;

var web3 = new Web3(new Web3.providers.WebsocketProvider("http://10.141.8.11:8545"));


var cuenta0, cuenta1;
async function start() {
            // Gett all the accounts
const accounts = await web3.eth.getAccounts();

//Cuentas
cuenta0 = accounts[2];
cuenta1 = accounts[3];

TokenDron = new web3.eth.Contract(ABITDron, "0x59D4671a75C058d1ccBe3939BA7Ebae9Fc6472e6");
GestionDron = new web3.eth.Contract(ABIGDron, "0xb21eA3b2D646c537b210F85d92C7390537fcB356");
console.log(TokenDron);
console.log(GestionDron);

}


start();

async function registrarparcela()
    {
        var altmin = document.getElementById('altmin').value;
        var altmax = document.getElementById('altmax').value;
        var pesticida= document.getElementById('pesticida').value;
        var size = document.getElementById('size').value;
        var preciomaxm2 = document.getElementById('preciomaxm2').value;

	await GestionDron.methods.registrarParcela(altmin, altmax, pesticida, size, preciomaxm2).send( {from: cuenta1, gas: 4612388}).on('receipt', function(receipt)
    {
        console.log(receipt);
        document.getElementById("msgs").innerHTML = JSON.stringify(receipt);
    })
    }

async function registrardron(min, max, pesticidad, preciom2)
    {
        var min = document.getElementById('min').value;
        var max = document.getElementById('max').value;
        var pesticida= document.getElementById('pesticidad').value;
        var preciom2 = document.getElementById('preciom2').value;
       
        
     await GestionDron.methods.registrarDron(min, max, pesticida, preciom2).send( {from: cuenta0, gas: 4612388}).on('receipt', function(receipt)
    {
        console.log(receipt);
        document.getElementById("msgs").innerHTML = JSON.stringify(receipt);
    })
    }
           
async function solicitartrabajo(_idParcela){
    
    await GestionDron.methods.solicitarTrabajo(_idParcela).send( {from:cuenta1, gas: 4612388}).on('receipt', function(receipt)
    {
        console.log(receipt);
        document.getElementById("msgs").innerHTML = JSON.stringify(receipt);
    })
    }

async function fum() {
    var _idParcela = document.getElementById('pid').value;
    var _idDron = document.getElementById('did').value;

    await GestionDron.methods.fumigar(_idParcela, _idDron).send( {from: cuenta0, gas: 4612388}).on('receipt', function(receipt)
    {
        console.log(receipt);
        document.getElementById("msgs").innerHTML = JSON.stringify(receipt);
    
    })
    }

async function modificarparcela(){

    var idp = document.getElementById('idp').value;
    var altmin = document.getElementById('altmin').value;
    var altmax = document.getElementById('altmax').value;
    var pesticida= document.getElementById('pesticida').value;
    var size = document.getElementById('size').value;
    var preciomaxm2 = document.getElementById('preciomaxm2').value;

    await GestionDron.methods.modificarParcela(idp, altmin, altmax, pesticida, size, preciomaxm2).send( {from: cuenta1, gas: 4612388}).on('receipt', function(receipt)
    {
        console.log(receipt);
        document.getElementById("msgs").innerHTML = JSON.stringify(receipt);
    })     
    }
          
async function bono(){
    await GestionDron.methods.obtenerBono().send( {from:cuenta1, gas: 4612388}).on('receipt', function(receipt)
    {
        console.log(receipt);
        document.getElementById("msgs").innerHTML = JSON.stringify(receipt);
    })
    }
