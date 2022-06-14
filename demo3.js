let a = prompt('Enter a number');
let x=[1, 5, 8,3, 112, 23, 55, 100];
for (i=0; i<x.length; i++){
    if(a == x[i]){
        alert('Giá trị số ' + a + ' được tìm thấy ở vị trí ' + i);
    }else {
        a = prompt('Enter a number')
    }
}