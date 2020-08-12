//Variables
let grade_by_unit, unit, number, start, score, total_unit, total_grade_by_unit, sgpa, grade;

//Select Elements from DOM
const text1 = document.getElementById('text1');  
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let numberForm = document.querySelector('#number_form');
start = 0;
total_unit = 0;
total_grade_by_unit = 0;


numberForm.addEventListener('submit', (e)=>{
    e.preventDefault() //This would prevent the default behavior of form submission
    let numberofCourses = parseInt(document.querySelector('#text1').value)
    document.querySelector('.form').querySelector('.form-group').remove()
    for(let i = 0; i<numberofCourses; i++){
        let formGroup = document.createElement('div');
        let score = document.createElement('input');
        score.type = 'text';
        score.className = 'form-control mb-3';
        score.placeholder = 'Enter your score....'
        score.id = `score_${i}`;
        let unit = document.createElement('input');
        unit.type = 'number';
        unit.className = 'form-control';
        unit.min = 1;
        unit.max = 6;
        unit.placeholder = 'Enter the course unit...'
        unit.id = `unit_${i}`;
        let label = document.createElement('h6');
        label.textContent = `Course ${i+1}`;
        formGroup.appendChild(document.createElement('hr'));
        formGroup.append(label)
        formGroup.appendChild(score);
        formGroup.appendChild(unit);
        document.querySelector('.form').appendChild(formGroup);
    }
})



button2.addEventListener('click', function (){
        let total_grade_by_unit = 0;
        let total_unit = 0;

        let numberofCourses = parseInt(document.querySelector('#text1').value);
        for(let i = 0; i < numberofCourses; i++){
            let score = parseInt(document.querySelector(`#score_${i}`).value);
            let unit = parseInt(document.querySelector(`#unit_${i}`).value);
        

    if(score >= 70){
        grade_by_unit = 5 * unit;
    }else if (score >= 60){
        grade_by_unit = 4 * unit;
    }else if(score >= 50){
        grade_by_unit = 3 * unit;
    }else if(score >= 45){
        grade_by_unit = 2 * unit;
    }else if(score >= 40){ 
        grade_by_unit = 1 * unit;
    }else {grade_by_unit = 0;
    }
            
                total_grade_by_unit += grade_by_unit;
                total_unit += unit;
    }
                
               

                start += 1

             
                sgpa = (total_grade_by_unit / total_unit);
    
                if (sgpa >= 5){
                    grade = "A";
                  }else if (sgpa >= 4){  
                    grade = "B";
              }else if (sgpa >= 3){
                    grade = "C";
                 }else if (sgpa >= 2){
                    grade = "D";
                 }else if (sgpa >= 1){
                    grade = "E";
                 }else
                    {grade = "F";}

                
                document.getElementById('text4').innerHTML = Math.round(sgpa, 2);
               console.log(sgpa);
                   console.log(grade); 
               
               document.getElementById('text5').innerHTML = grade

});

button3.addEventListener('click', function(){
    
    location.reload();

})
   