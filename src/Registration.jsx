import "./Registration.css"

function Registration() 
{
  return (
    <>
        <div className="main-container">
            <h1>Fitness Club Registration</h1>

            <div className="container">
                <form action="" className="form">
                    <input type="text" placeholder="Name"/> <br />
                    <input type="email" placeholder="Email"/> <br />
                    <input type="tel" placeholder="Phone Number"/> <br />
                    <input type="text" placeholder="Address"/> <br />
                    <button>Add member</button>
                </form>
            </div>

            <button>View Member List</button>
        </div>
    </>
  );
}

export default Registration