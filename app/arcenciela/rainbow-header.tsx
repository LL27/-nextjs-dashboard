import styles from '@/app/ui/home.module.css';


export default function RainbowHeader({ text }: { text: string })  {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'purple', 'brown'];
    

 return(
   <div style={ {textAlign: 'center' }}
>
        
        {text.split('').map((letter: string, index ) => (
            <span
                key={index}
                style={ {color: colors[index % colors.length]}}
                className={"text-6xl md:text-8xl"}
                
            >
               {letter} 

            </span>
        ))}
   </div> 
 )
};