pragma solidity ^0.5.0;


import "./TokenDron.sol";

contract GestionDron {
    
    
    address public owner;
    TokenDron public tokendron;
    
    constructor (address tokenAddress) public {
    
        tokendron = TokenDron(tokenAddress);
        owner = msg.sender;
        nuevoPesticida("A");
        nuevoPesticida("B");
        nuevoPesticida("C");
        nuevoPesticida("D");
        nuevoPesticida("E");
    }
    
    mapping (uint256 => Dron) drones;
    mapping (uint256 => Parcela) parcelas;
    
    uint256 public droncount;
    uint256 public parcelacount;
    
    uint256 public pesticidasAceptados;
    
    mapping (uint256 => string) pesticidasporid;
    mapping (string => uint256) pesticidaspornombre;
    
    //Características relativas a la parcela:
    struct Parcela {

        uint256 id;
        address propietarioParcela;
        uint256 min;
        uint256 max;
        uint256 pesticida;
        uint256 m2;
        uint256 preciomaxm2;
    }
    
    //Características relativas al dron:
    struct Dron {

        uint256 id;
        address empresaPropietaria;
        uint256 min;
        uint256 max;
        uint256 pesticida;
        uint256 preciom2;
    }
    
    //Modificador que excluye de ejecutar una función a todo aquel que no sea el dueño del contrato:
    modifier onlyOwner () {
        require(msg.sender == owner);
        _;
    }
    //Evento que tiene lugar cuando la parcela se ha fumigado y ejecutado el pago:
    event ParcelaFumigada (uint256 indexed idparcela, uint256 indexed iddron, uint256 indexed factura);
    
    //Evento que tiene lugar cuando el cliente aprueba un trabajo sobre una parcela con un precio máximo establecido:
    event TrabajoSolicitado (uint256 indexed id);
     
    //La empresa añade un pesticida nuevo:
    function nuevoPesticida(string memory _nuevoPesticida) public onlyOwner
    {
        pesticidasAceptados = pesticidasAceptados + 1;
        pesticidasporid[pesticidasAceptados] = _nuevoPesticida;
        pesticidaspornombre[_nuevoPesticida] = pesticidasAceptados;
    }
    
    //La empresa registra un dron:
    function registrarDron (uint256 _min, uint256 _max, uint256 _pesticida, uint256 _preciom2) public onlyOwner 
    {
        require(_pesticida <= pesticidasAceptados, "Pesticida no aceptado");
        droncount = droncount + 1;
        drones[droncount] = Dron(droncount, msg.sender, _min, _max, _pesticida, _preciom2);
    }
    
    //El cliente registra una parcela:
    function registrarParcela (uint256 _min, uint256 _max, uint256 _pesticida, uint256 _m2, uint256 _preciomaxm2) public
    {
        require(_pesticida <= pesticidasAceptados, "Pesticida no aceptado");
        parcelacount = parcelacount + 1;
        parcelas[parcelacount] = Parcela(parcelacount, msg.sender, _min, _max, _pesticida, _m2, _preciomaxm2);
    }
    
    //Introduce el id del pesticida para obtener su nombre:
    function getnombrepesticidaporid (uint256 _id) public view returns(string memory)
    {
        require(_id <= pesticidasAceptados, "Este pesticida no está aceptado");
        return pesticidasporid[_id];
    }
    
    //Introduce el nombre del pesticida para obtener su id:
    function getidpesticidapornombre (string memory _nombre) public view returns(uint256)
    {
        return pesticidaspornombre[_nombre];
    }
    
    //Obtener tokens gratis para probar la plataforma
    function obtenerBono () external returns (bool success) {
        
        tokendron._mint(msg.sender, 1000000);
        return true;
    }
    
    //El propietario de la parcela aprueba el pago:
    function solicitarTrabajo (uint256 _idParcela) external returns (bool success)
    {
        require(parcelas[_idParcela].propietarioParcela == msg.sender);
        uint256 preciomax = parcelas[_idParcela].m2 * parcelas[_idParcela].preciomaxm2;
        bool increased;
        increased = tokendron.increaseAllowanceOrigin(owner, preciomax);
        emit TrabajoSolicitado(_idParcela);
        
        return increased;
    }
    
    //Aumenta el preciomaxm2 si no es suficiente para realizar el trabajo:
    function modificarParcela (uint256 _idParcela, uint256 min, uint256 max, uint256 pesticida,  uint256 m2, uint256 preciomaxm2) public {
        
        require(parcelas[_idParcela].propietarioParcela == msg.sender);
        parcelas[_idParcela].min = min;
        parcelas[_idParcela].max = max;
        parcelas[_idParcela].pesticida = pesticida;
        parcelas[_idParcela].m2 = m2;
        parcelas[_idParcela].preciomaxm2 = preciomaxm2;
    }
    
    //La empresa fumiga la parcela y cobra:
    function fumigar (uint256 _idParcela, uint256 _idDron) public onlyOwner returns (bool success) {
        
        require(parcelas[_idParcela].min <= drones[_idDron].max, "El dron no alcanza la altura mínima de la parcela");
        require(parcelas[_idParcela].pesticida == drones[_idDron].pesticida, "El pesticida no coincide");
        uint256 factura = drones[_idDron].preciom2 * parcelas[_idParcela].m2;
        bool transferedfrom;
        transferedfrom = tokendron.transferFromOrigin(parcelas[_idParcela].propietarioParcela, owner, factura);
        require(transferedfrom == true, "Pago no realizado");
        emit ParcelaFumigada(_idParcela, _idDron, factura);
        return transferedfrom;
    }
    
    /*This type is only supported in the new experimental ABI encoder. Use "pragma experimental ABIEncoderV2;" to enable the feature.
    Introduce el id de la parcela para obtener su información:
    function getparcelas(uint256 _id) public view returns (Parcela memory) {
        
        require(_id <= parcelacount, "Esta id no corresponde a ninguna parcela");
        return parcelas[_id];
    }
    
    //Introduce el id del dron para obtener su información:
    function getmapdrones (uint256 _id) public view returns(Dron memory)
    {
        require(_id <= droncount, "Esta id no corresponde a ningún dron");
        return drones[_id];
    }
    */
    
    //Introduce el id de la parcela para obtener su información:
    function getparcelas(uint256 _id) public view returns (uint256 idParcela, address propietarioParcela, uint256 min, uint256 max, uint256 pesticida, uint256 m2, uint256 preciomaxm2) 
    {
        
        require(_id <= parcelacount, "Esta id no corresponde a ninguna parcela");
        return (parcelas[_id].id, parcelas[_id].propietarioParcela, parcelas[_id].min, parcelas[_id].max, parcelas[_id].pesticida, parcelas[_id].m2, parcelas[_id].preciomaxm2); 
    }
    //Introduce el id del dron para obtener su información:
    function getmapdrones (uint256 _id) public view returns(uint idDron, address empresaPropietaria, uint256 _min, uint256 _max, uint256 _pesticida, uint256 _preciom2)
    {
        require(_id <= droncount, "Esta id no corresponde a ningún dron");
        return (drones[_id].id, drones[_id].empresaPropietaria, drones[_id].min, drones[_id].max, drones[_id].pesticida, drones[_id].preciom2); 
    }
    

}