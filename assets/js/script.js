function entropy(a,b,c){
    count=0
    if(a==0) count++;
    if(b==0) count++;
    if(c==0) count++;
    if(count==2) return 0;
	let sum = a+b+c
	if(a==0) return -(b/sum*Math.log2(b/sum)+c/sum*Math.log2(c/sum))
	if(b==0) return -(a/sum*Math.log2(a/sum)+c/sum*Math.log2(c/sum))
	if(c==0) return -(a/sum*Math.log2(a/sum)+b/sum*Math.log2(b/sum))
	return -(a/sum*Math.log2(a/sum)+b/sum*Math.log2(b/sum)+c/sum*Math.log2(c/sum))
}

document.getElementById('tinh').onclick = () => {
	let toth = Number(document.getElementById('toth').value);
    let khah = Number(document.getElementById('khah').value);
    let kemh = Number(document.getElementById('kemh').value);
    let sumh = toth + khah +kemh;
    let entropyh = entropy(toth, khah, kemh)
    console.log(sumh,entropyh)
    let tothi1 = Number(document.getElementById('tothi1').value);
    let khahi1 = Number(document.getElementById('khahi1').value);
    let kemhi1 = Number(document.getElementById('kemhi1').value);
    let sumhi1 = tothi1 + khahi1 +kemhi1;
    let entropyhi1 = entropy(tothi1, khahi1, kemhi1)
    console.log(sumhi1,entropyhi1)
    let tothi2 = Number(document.getElementById('tothi2').value);
    let khahi2 = Number(document.getElementById('khahi2').value);
    let kemhi2 = Number(document.getElementById('kemhi2').value);
    let sumhi2 = tothi2 + khahi2 +kemhi2;
    let entropyhi2 = entropy(tothi2, khahi2, kemhi2)
    let tothi3 = Number(document.getElementById('tothi3').value);
    let khahi3 = Number(document.getElementById('khahi3').value);
    let kemhi3 = Number(document.getElementById('kemhi3').value);
    let sumhi3 = tothi3 + khahi3 +kemhi3;
    let entropyhi3 = entropy(tothi3, khahi3, kemhi3)
    let isHasI3 = document.getElementById('checkhi3').checked
    document.getElementById('h').innerHTML = entropyh
    document.getElementById('hi1').innerHTML = entropyhi1
    document.getElementById('hi2').innerHTML = entropyhi2
	if(!isHasI3){
		document.getElementById('ig').innerHTML = entropyh-entropyhi1*sumhi1/sumh-entropyhi2*sumhi2/sumh
        document.getElementById('hi3').innerHTML = 'không tồn tại'
	}
	else{
        document.getElementById('hi3').innerHTML = entropyhi3
		document.getElementById('ig').innerHTML = entropyh-entropyhi1*sumhi1/sumh-entropyhi2*sumhi2/sumh-entropyhi3*sumhi3/sumh
	}
}