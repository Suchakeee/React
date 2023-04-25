export default function handleClick() {
    
    const handleClick1 = () => {
        console.log('me click1');
      };
    
    const handleClick2 = () => {
        console.log('me click2');
      };

    const handleClick3 = () => {
        console.log('me click2');
      };

    return (
        <><button className="button" onClick={handleClick1}><h3>Buttom 1</h3></button>
        <button className="button" onClick={handleClick2}><h3>Buttom 2</h3></button>
        <button className="button" onClick={handleClick3}><h3>Buttom 3</h3></button></>
    )
    
}
