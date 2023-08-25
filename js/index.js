// bài 1 :tìm số nguyên dương nhỏ nhất sao cho : 1 + 2 + ... + n > 10000
function btnTinh() {
    var nNumber = 0;
    var number = 0;
    while(number < 10000){
        nNumber++;
        number += nNumber;
    }
    document.querySelector('#result').innerHTML = `<p>Số nguyên dương nhỏ nhất : ${nNumber}</p>`;
}

// bài 2 :nhập vào 2 số x , n tính tổng : S(n) = x + x^2 + x^3 + ... + x^n (sử dụng vòng lặp và hàm)
function btnTong() {
    var numberX = +document.querySelector('#numberX').value;
    var numberN = +document.querySelector('#numberN').value;
    var sum = 0;

    for(var i = 1;i <= numberN;i++){
        sum += numberX ** i;
    }
    document.querySelector('#result2').innerHTML = sum;

}

// bài 3 : nhập vào n , tính giai thừa 1*2*...*n 
function btngiaiThua(){
    var n = +document.querySelector('#n').value;
    var giaiThua = 1;
    for(i = 0; i < n;i++){
        giaiThua += giaiThua * i;
    }
    document.querySelector('#result3').innerHTML = `Giai thừa : ${giaiThua}`;
}

// bài 4 : khi click vào button in  ra 10 thẻ div . nếu div nào vị trí chẵn thì background đỏ , lẻ thì background xanh 
function btnPrint(){
    
    for(i = 1; i<= 10;i++){
        var createDiv = document.createElement('div');
        if(i % 2 === 0){
            createDiv.style.backgroundColor = "red";
            
        }else{
            createDiv.style.backgroundColor = "blue";
            
        }
        createDiv.innerHTML = `
        <p>thẻ thứ : ${i}</p>
    `;
    document.querySelector("#result4").appendChild(createDiv);
    }
    
    
}


// bài 5 :có 1 ô input , 1 button . Click vào btn thì in ra giá trị số nguyên từ 1 đến giá trị ô input 
function btnPrint1() {
    var number1 = +document.querySelector('#soN').value;

    if(number1 == 0){
        alert('vui lòng nhập số lớn hơn 0');
    }else{
        for(i = 1; i <= number1;i++){
            createNum = document.createElement('p');
            createNum.innerHTML = i;
            document.querySelector("#result5").appendChild(createNum);
        }
    }
   
}