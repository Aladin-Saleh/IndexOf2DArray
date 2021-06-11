function indexOf2DArray(array,indexof) {
    for (let index = 0; index < array.length; index++) {
        for (let indexj = 0; indexj < array[index].length; indexj++) {
            if (array[index][indexj] == indexof) {
                    return index
            }
        }
        
    }
    return -1;
}
