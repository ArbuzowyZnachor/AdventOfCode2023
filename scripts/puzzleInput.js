export function puzzleInput (){
    document.getElementById('inputfile')
        .addEventListener('change', function () {
            let fr = new FileReader();
            fr.onload = function () {
                localStorage.setItem("input", fr.result);
            }
            fr.readAsText(this.files[0]);
        })
}