import pic from './soap.jpeg';

function SkincareList() {
    return (
      <div>
        <img src={pic} className="Soap-pic" alt="soap" width="300px"/>
        <h2>Skincare List</h2>
          <ul>
            <li>Soap</li>
            <li>Facewash</li>
            <li>Rosewater</li>
            <li>SPF Cream</li>
            <li>Hand Lotion </li>
            <li>Lip Balm</li>
          </ul>

          
          
          </div>
    );
  }
  
  export default SkincareList;