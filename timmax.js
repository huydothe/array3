let x=[-3, 5, 1, 3, 2, 10];
let max=x[0];
let index=0;
for (i=0; i<x.length; i++){
    if(x[i]>max){
        max=x[i];
        index=i;
    }
}document.write('Giá trị lớn nhất là ' + max + ' ở vị trí ' + index);