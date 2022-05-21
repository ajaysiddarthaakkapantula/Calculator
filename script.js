var operand1=0;
var operator=null;
var operand2=null;
var buttons=document.getElementsByClassName('buttons');
var screen=document.getElementById('screen');

for(var i= 0;i<buttons.length;i++)
{

    buttons[i].addEventListener('click',function()
    {

        if(this.innerHTML == 'AC')
        {
            screen.innerHTML='';
        }
        else if(this.innerHTML == '+' || this.innerHTML == '-' || this.innerHTML == '*' || this.innerHTML == '/' || this.innerHTML == '%')
        {
            // operator=this.innerHTML;
            // operand1=screen.innerHTML;
            // screen.innerHTML='';
           screen.innerHTML +=this.innerHTML;


        }
        else if(this.innerHTML=='=')
        {
            // operand2=screen.innerHTML;
            screen.innerHTML = eval(screen.innerHTML);
        }
        else if( this.innerHTML == '+/-') {
             
            screen.innerHTML= eval ('-1' + '*' + screen.innerHTML )
        }
        else 
        {
        
           screen.innerHTML +=this.innerHTML;
           
        
        }


    });
    
}