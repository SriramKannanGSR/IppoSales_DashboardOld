import React, { useState, useEffect } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleNavbar = () => { setIsExpanded(!isExpanded); }; 
    
    const [username, setUsername] = useState('Guest');  
    useEffect(() => {       
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) 
        {
            setUsername(storedUsername); 
        }
    }, []); 
    
    return (
        <div>
          
            <div className='topbar'>
                <div className='menubar'>
                    <div className='menubox'>                        
                        <img src="/img/menu.png"  alt="no image" className='menuicon' onClick={toggleNavbar} />
                    </div>
                    
                    <div className='userdetails'>                                                                                             
                       <img src="/img/user.png" alt="" srcset="" className='usericon' />      
                       <p className='username'>{username}</p>                         
                    </div>
                </div>                
            </div>

         
            <div className={`navbar ${isExpanded ? 'expanded' : ''}`}>
              
                <div className="titles">
                    <img src="/img/dashboard.png" alt="Dashboard" className='titleicon'/>
                    <Link to="/dashboard/MainWindow" className={`titlenames ${isExpanded ? 'visible' : ''}`}>Dashboard</Link>
                </div>

                <div className="titles">
                    <img src="/img/leads.png" alt="Leads" className='titleicon'/>
                    <Link to="/dashboard/Leads" className={`titlenames ${isExpanded ? 'visible' : ''}`}>Leads</Link>
                      {/* Lead Generations */}
                </div>

                <div className="titles">
                    <img src="/img/marketing.png" alt="Marketing" className='titleicon' />
                    <Link to="/dashboard/Marketing" className={`titlenames ${isExpanded ? 'visible' : ''}`}>Marketing</Link>
                </div>

                <div className="titles">
                    <img src="/img/payment.png" alt="Payment" className='titleicon' />
                    <Link to="/dashboard/Payment" className={`titlenames ${isExpanded ? 'visible' : ''}`}>Payment</Link>
                    {/* Payment and Subscriptions */}
                </div>

                <div className="titles">
                    <img src="/img/sales.png" alt="Sales" className='titleicon' />
                    <Link to="/dashboard/Sales" className={`titlenames ${isExpanded ? 'visible' : ''}`}>Sales</Link>
                </div>

                <div className="titles">
                    <img src="/img/accounts.png" alt="Accounts" className='titleicon' />
                    <Link to="/dashboard/Account" className={`titlenames ${isExpanded ? 'visible' : ''}`}>Account</Link>
                </div>

                <div className="titles">
                    <img src="/img/tasks.png" alt="Tasks" className='titleicon' />
                    <Link to="/dashboard/Tasks" className={`titlenames ${isExpanded ? 'visible' : ''}`}>Tasks</Link>
                       {/* Tasks and Reminders */}
                </div>

                <div className="titles">
                    <img src="/img/reports.png" alt="Reports" className='titleicon' />
                    <Link to="/dashboard/Reports" className={`titlenames ${isExpanded ? 'visible' : ''}`}>Reports</Link>
                </div>

                <div className="titles">
                    <img src="/img/settings.png" alt="Settings" className='titleicon' />
                    <Link to="/dashboard/Settings" className={`titlenames ${isExpanded ? 'visible' : ''}`}>Settings</Link>
                </div>

                <div className="titles">
                    <img src="/img/help.png" alt="Help" className='titleicon' />
                    <Link to="/dashboard/Support" className={`titlenames ${isExpanded ? 'visible' : ''}`}>Help</Link>
                </div>
            </div>
        </div>        
    );
};

export default Navbar;



// import React, { useState } from 'react';
// import './dashboard.css';
// import { Link } from 'react-router-dom';


// const Navbar = () => {  
//     return (        
//         <div>

//             <div className='topbar'>
//                 <div className='menubar'>
//                     <div className='menubox'>
//                        <img src="/img/menu.png" alt="no image" className='menuicon'/>
//                     </div>
                    
//                     <div className='userdetails'>

//                     </div>
//                 </div>                
//             </div>

//             <div className='navbar'>

//                 <div className="titles">
//                     <img src="/img/dashboard.png" alt="" srcset="" className='titleicon'/>
//                     <Link to="/dashboard/MainWindow" className='titlenames'>Dashboard</Link>  
//                 </div>

//                 <div className="titles">
//                     <img src="/img/leads.png" alt="" srcset="" className='titleicon'/>
//                     <Link to="/dashboard/Leads" className='titlenames'>Leads</Link>   
//                     {/* Lead Generations */}
//                 </div>

//                 <div className="titles">
//                     <img src="/img/marketing.png" alt="" srcset="" className='titleicon' />
//                     <Link to="/dashboard/Marketing" className='titlenames'>Marketing</Link>
//                 </div>
              
//                 <div className="titles">
//                     <img src="/img/payment.png" alt="" srcset="" className='titleicon' />
//                     <Link to="/dashboard/Payment" className='titlenames'>Payment</Link>
//                     {/* Payment and Subscriptions */}
//                 </div>
               
//                 <div className="titles">
//                     <img src="/img/sales.png" alt="" srcset="" className='titleicon' />
//                     <Link to="/dashboard/Sales" className='titlenames'>Sales</Link>    
//                 </div>

//                 <div className="titles">
//                     <img src="/img/accounts.png" alt="" srcset="" className='titleicon' />
//                     <Link to="/dashboard/Account" className='titlenames'>Accounts</Link>      
//                 </div>
          
//                 <div className="titles">
//                     <img src="/img/tasks.png" alt="" srcset="" className='titleicon' />
//                     <Link to="/dashboard/Tasks" className='titlenames'>Tasks</Link>
//                     {/* Tasks and Reminders */}
//                 </div>

//                 <div className="titles">
//                     <img src="/img/reports.png" alt="" srcset="" className='titleicon' />
//                     <Link to="/dashboard/Reports" className='titlenames'>Reports</Link>
//                 </div>      

//                 <div className="titles">
//                     <img src="/img/settings.png" alt="" srcset="" className='titleicon' />
//                     <Link to="/dashboard/Settings" className='titlenames'>Settings</Link>
//                 </div>    

//                 <div className="titles">
//                     <img src="/img/help.png" alt="" srcset="" className='titleicon' />
//                     <Link to="/dashboard/Support" className='titlenames'>Help</Link>
//                     {/* Help and Support */}
//                 </div>                
                
//             </div>
//         </div>        
//     )
// }

// export default Navbar;


// <div className='navbar'>
    //     <Link to="/MainWindow"><p>Dashboard</p></Link>
    //     <Link to="*/Dashboard/Leads"><p>Lead Generations</p></Link>
    //     <Link><p>Marketing</p></Link>
    //     <Link><p>Payment and Subscriptions</p></Link>
    //     <Link><p>Sales</p></Link>
    //     <Link><p>Acounts</p></Link>
    //     <Link><p>Tasks and Remainders</p></Link>
    //     <Link><p>Reports</p></Link>
    //     <Link><p>Settings</p></Link>
    //     <Link><p>Help and Support</p></Link>
// </div>