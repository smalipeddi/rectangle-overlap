
class RectangleCoordinates {
  coordinates: any[] = [];
  
  constructor(x: any,y: any) {
       this.coordinates.push(x);
        this.coordinates.push(y);
  }

  getNumberOfRectangles = () => {
    
  }
}
// submit a form with the number of rectangles to test for overlapping
const form: any = document.querySelector('#rectangles');

form.onsubmit = () => {
  const formData = new FormData(form);

  const text = formData.get('textInput') as string;
  const rectanglesCount = parseInt(text);
  console.log(rectanglesCount);
  
  // check if the user entered a positive integer
  if(isNaN(rectanglesCount)){
    alert("Please enter a valid positive number");
      return false;
  }
  else if(rectanglesCount < 2 ){
    alert("Please enter a valid positive number greater than 1");
    return false;
  } else {
     
  let r1 = document.getElementById("rectangle");
  let label = document.createElement("label");
        
  label.innerHTML = "Enter 4 coordinates for each rectangle seperated by comma";
  r1?.appendChild(label)
  // dynamically generate the input fields for each rectangle coordinates 
  for(var i = 0; i <rectanglesCount; i++) {
        let div1 = document.createElement("div")
        let label = document.createElement("label");
        
        label.innerHTML = "Rectangle " + (i+1);
      
        div1.appendChild(label)
    
        let input = document.createElement("input")
        input.type = "text";
        input.id="rectangle" + i
        input.name="rectangle" + (i +1);
       
        div1.append(input)
      
        let r = document.getElementById("rectangle");
        r?.appendChild(div1)
     
      }
 
      let r = document.getElementById("rectangle");
      
      // create a submit button
      let submitBtn = document.createElement("button");
      submitBtn.type="submit"
      submitBtn.innerHTML = "SUBMIT"
      r?.append(submitBtn);
      return false; // prevent reload
    }
};

// helper to parse each rectangle field data 
const formInputsData = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input');
  let values: {[prop: string]: string} = {};

  inputs.forEach(input => {
    values[input.name] = input.value;
  });
  return values;
};

const rectangleForm: any = document.createElement("form");
rectangleForm.setAttribute("id", "allrectangles");
const rectangleDiv =document.createElement("div");
rectangleDiv.setAttribute("id", "rectangle");
rectangleForm.appendChild(rectangleDiv);

// append form to allrectangles wrapper
document.getElementById("allrectangles-wrapper")?.appendChild(rectangleForm);

const rectangleCoordinates: any[] = [];
// submit all rectangles from data to check if they overlap
rectangleForm.onsubmit = () => {
  const formData = new FormData(rectangleForm);
  const res = formInputsData(rectangleForm)
  
  Object.keys(res).map((key) => {
    const rect = res[key].split(",");
    console.log("sunitha",rect);

    if(isNaN(parseInt(rect[0])) || isNaN(parseInt(rect[1])) || isNaN(parseInt(rect[2])) || isNaN(parseInt(rect[3]))){
      alert("Enter valid positive integers seperated by comma");
      rectangleForm.reset();
      return false
    } else {
      let bottomLeft = new RectangleCoordinates(parseInt(rect[0]),parseInt(rect[1]));
      let topRight= new RectangleCoordinates(parseInt(rect[2]), parseInt(rect[3]));
    
      rectangleCoordinates.push(bottomLeft);
      rectangleCoordinates.push(topRight);
    }

  });
  
  // pass the coordinates of each rectangle to the testOverLap function
 
  testOverLap(rectangleCoordinates);
  rectangleForm.reset();
  return false; // prevent reload

}

const testOverLap = (...args: any[]) => {
  // if the second rectangle is top, left, bottom or right of the coordinates of the first rectangle, then they do not overlap else they ovelap 
  if(rectangleCoordinates[1].coordinates[0] < rectangleCoordinates[2].coordinates[0] ||
    rectangleCoordinates[1].coordinates[1] < rectangleCoordinates[2].coordinates[0] ||
    rectangleCoordinates[2].coordinates[0] > rectangleCoordinates[1].coordinates[0] ||
    rectangleCoordinates[0].coordinates[0] > rectangleCoordinates[3].coordinates[1]) {
        console.log("Rectangles do not overlap");
        alert("Area of intersection of Rectangles is 0");
        location.reload();
        return false
    }
    else {
        // check if there are only 2 rectangles, means rectangleCoordinates are 4, so no need for recursion
        if(rectangleCoordinates.length === 4) {
          console.log("First two Rectangles overlap");
          alert("Area of intersection of Rectangles is not 0");
          location.reload();
          return true
        } else {
          // remove the first rectangle from the list of rectangles to test overlap and repeat the testOverLap function
          rectangleCoordinates.shift()
          rectangleCoordinates.shift()
          console.log("remaining rectangles", rectangleCoordinates);
          testOverLap(...args)
          console.log("Area of intersection of Rectangles is not 0");
          alert("Area of intersection of Rectangles is not 0");
          location.reload();
          return true
        }
    }
 }

