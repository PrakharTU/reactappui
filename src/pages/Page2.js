import React from 'react';

class Page1 extends React.Component{
    componentDidMount(){
        document.querySelector("#homepage").style.background=`black`;
        document.querySelector("#homepage>.content").style.filter=`blur(3px)`;
        let pos = 0;
        let interval = setInterval(frame, 0);
        function frame(){
            if(pos===-91){
                clearInterval(interval);
            }
            else
                document.querySelector("#p3").style.transform=`translateX(${pos}%)`;
            pos--;
        }
    }

    componentWillUnmount(){
        document.querySelector("#homepage").style.background=`#00b0ff`;
        document.querySelector("#homepage>.content").style.filter=`blur(0px)`;      
    }
    render(){
        return(
            <div className="page" id="p3">
                <div className="content fas fa-rocket">
                    <h1 className="heading">Host your apps</h1>
                </div>
            </div>
        )
    }
}

export default Page1;