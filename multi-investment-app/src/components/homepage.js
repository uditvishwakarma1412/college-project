import './homepage.css';

function Homepage() {
    return(
        <>
        <div className="container">
          <div className="paradiv">

            <h1 className="title1">secure your financial future with us!</h1>

            <p className="paramain">Are you ready to make informed investment decisions? we're here to help! Our powerful stock screener allows you to filter and analyze stocks based on your criteria, giving you the insights you need to build a robust portfolio.</p>

            
            <a href="/Login">
              <button className="startforfreebtn">start for free</button>
              </a>

          </div>
          <div className="imgdiv">
            <img className="imgmain" src="https://img.freepik.com/premium-vector/modern-flat-illustration-online-trading_9206-3221.jpg?w=740"></img>
          </div>
        </div>
        </>
    )
}
export default Homepage;