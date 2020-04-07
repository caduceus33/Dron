pragma solidity ^0.5.0;

library SafeMath {

  /**
   * @dev Multiplies two numbers, throws on overflow.
   * @param _a Factor number.
   * @param _b Factor number.
   */
  function mul(
    uint256 _a,
    uint256 _b
  )
    internal
    pure
    returns (uint256)
  {
    if (_a == 0) {
      return 0;
    }
    uint256 c = _a * _b;
    assert(c / _a == _b);
    return c;
  }

  /**
   * @dev Integer division of two numbers, truncating the quotient.
   * @param _a Dividend number.
   * @param _b Divisor number.
   */
  function div(
    uint256 _a,
    uint256 _b
  )
    internal
    pure
    returns (uint256)
  {
    uint256 c = _a / _b;
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  /**
   * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
   * @param _a Minuend number.
   * @param _b Subtrahend number.
   */
  function sub(
    uint256 _a,
    uint256 _b
  )
    internal
    pure
    returns (uint256)
  {
    assert(_b <= _a);
    return _a - _b;
  }

  /**
   * @dev Adds two numbers, throws on overflow.
   * @param _a Number.
   * @param _b Number.
   */
  function add(
    uint256 _a,
    uint256 _b
  )
    internal
    pure
    returns (uint256)
  {
    uint256 c = _a + _b;
    assert(c >= _a);
    return c;
  }

}
   
contract TokenDron {
  using SafeMath for uint256;
  
  address public owner;
  constructor () public {
      owner = msg.sender;
  }

  mapping (address => uint256) private _balances;

  mapping (address => mapping (address => uint256)) public _allowed;

  uint256 private _totalSupply;
  
  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    
  function totalSupply() public view returns (uint256) {
    return _totalSupply;
  }

  function balanceOf(address owner) public view returns (uint256) {
    return _balances[owner];
  }

  function allowance(address owner, address spender) public view returns (uint256)
  {
    return _allowed[owner][spender];
  }

  function transfer(address to, uint256 value) public returns (bool) {
    require(value <= _balances[msg.sender]);
    require(to != address(0));

    _balances[msg.sender] = _balances[msg.sender].sub(value);
    _balances[to] = _balances[to].add(value);
    emit Transfer(msg.sender, to, value);
    return true;
  }

  function approve(address spender, uint256 value) public returns (bool) {
    require(spender != address(0));

    _allowed[msg.sender][spender] = value;
    emit Approval(msg.sender, spender, value);
    return true;
  }

  function transferFrom(
    address from,
    address to,
    uint256 value
  )
    public
    returns (bool)
  {
    require(value <= _balances[from]);
    require(value <= _allowed[from][msg.sender]);
    require(to != address(0));

    _balances[from] = _balances[from].sub(value);
    _balances[to] = _balances[to].add(value);
    _allowed[from][msg.sender] = _allowed[from][msg.sender].sub(value);
    emit Transfer(from, to, value);
    return true;
  }
  
  function transferFromOrigin(
    address from,
    address to,
    uint256 value
  )
    public
    returns (bool)
  {
    require(value <= _balances[from]);
    require(value <= _allowed[from][tx.origin]);
    require(to != address(0));

    _balances[from] = _balances[from].sub(value);
    _balances[to] = _balances[to].add(value);
    _allowed[from][tx.origin] = _allowed[from][tx.origin].sub(value);
    emit Transfer(from, to, value);
    return true;
  }

  function increaseAllowance(
    address spender,
    uint256 addedValue
  )
    public
    returns (bool)
  {
    require(spender != address(0));

    _allowed[msg.sender][spender] = (
      _allowed[msg.sender][spender].add(addedValue));
    emit Approval(msg.sender, spender, _allowed[msg.sender][spender]);
    return true;
  }
  
  //Se añade esta función que mantiene el msg.sender del contrato que llama (y se mantiene la original para la compatibilidad ERC20)
  function increaseAllowanceOrigin(
    address spender,
    uint256 addedValue
  )
    public
    returns (bool)
  {
    require(spender != address(0));

    _allowed[tx.origin][spender] = (
      _allowed[tx.origin][spender].add(addedValue));
    emit Approval(tx.origin, spender, _allowed[tx.origin][spender]);
    return true;
  }

  function decreaseAllowance(
    address spender,
    uint256 subtractedValue
  )
    public
    returns (bool)
  {
    require(spender != address(0));

    _allowed[msg.sender][spender] = (
      _allowed[msg.sender][spender].sub(subtractedValue));
    emit Approval(msg.sender, spender, _allowed[msg.sender][spender]);
    return true;
  }
  
  function _mint(address account, uint256 amount) public {
    require(account != address(0));
    _totalSupply = _totalSupply.add(amount);
    _balances[account] = _balances[account].add(amount);
    emit Transfer(address(0), account, amount);
  }
  
  

/*
  function _burn(address account, uint256 amount) internal {
    require(account != 0);
    require(amount <= _balances[account]);

    _totalSupply = _totalSupply.sub(amount);
    _balances[account] = _balances[account].sub(amount);
    emit Transfer(account, address(0), amount);
  }

  function _burnFrom(address account, uint256 amount) internal {
    require(amount <= _allowed[account][msg.sender]);

    // Should https://github.com/OpenZeppelin/zeppelin-solidity/issues/707 be accepted,
    // this function needs to emit an event with the updated approval.
    _allowed[account][msg.sender] = _allowed[account][msg.sender].sub(
      amount);
    _burn(account, amount);
  }*/

    
        
}
