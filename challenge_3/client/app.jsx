class App extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      firstName: '',
      lastName: '',
      email: '',
      password: '',

      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',

      creditCard: '',
      expdate: '',
      cvv: '',
      billingZip: '',

      form1: true,
      form2: false,
      form3: false
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleNextForm = this.handleNextForm.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
  }

  handleUserInput(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleNextForm(){
    if(this.state.form1 === true){
      this.setState({
        form1: false,
        form2: true
      })
    }

    if(this.state.form1 === false && this.state.form2 === true){
      this.setState({
        form2: false,
        form3: true
      })
    }
  }

  handleCheckout(){
    fetch('/checkout', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
      })
    })
  }

  render(){
    const nextButton = (
      <button
      onClick={this.handleNextForm}
      >Next</button>
    )

    const submitButton = (
      <button
      onClick={this.handleCheckout}
      >Checkout
      </button>
    )

    if(this.state.form1){
      return(
      <div>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleUserInput}/>
        <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleUserInput}/>
        <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleUserInput}/>
        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleUserInput}/>
      {nextButton}
      </div>
      )
    }
    if(this.state.form2){
      return( 
      <div>
        <input type="text" name="address" value={this.state.address} placeholder="Address" onChange={this.handleUserInput}/>
        <input type="text" name="city" value={this.state.city} placeholder="City" onChange={this.handleUserInput}/>
        <input type="text" name="state" value={this.state.state} placeholder="State" onChange={this.handleUserInput}/>
        <input type="text" name="zip" value={this.state.zip} placeholder="Zip Code" onChange={this.handleUserInput}/>
        <input type="text" name="phone" value={this.state.phone} placeholder="Phone Number" onChange={this.handleUserInput}/>
      {nextButton}
      </div>)
    }
   if(this.state.form3){
     return(
      <div>
        <input type="number" name="ccard" value={this.state.ccard} placeholder="C Card" onChange={this.handleUserInput}/>
        <input type="date" name="expdate" value={this.state.expdate} placeholder="Expiration Date" onChange={this.handleUserInput}/>
        <input type="number" name="cvv" value={this.state.cvv} placeholder="CVV" onChange={this.handleUserInput}/>
        <input type="number" name="billingZip" value={this.state.billingZip} placeholder="Billing Zip Code" onChange={this.handleUserInput}/>
        {submitButton}
      </div>
     )
   }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

