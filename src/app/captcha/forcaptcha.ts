function getRandIndex(maxLength: number){
  return Math.floor(Math.random()*maxLength);
}
let data:string|null = null;
export function getCaptcha(){
  let canvas: any = document.getElementById('canvas');
  if (canvas) {
    let pen = canvas.getContext('2d');
    pen.clearRect(0, 0, 400, 400);
    let captcha = Math.random().toString(36).substring(2, 6);
    pen.font = "30px Georgia";
    pen.fillStyle = "grey";
    let maxLength = captcha.length;
    let index1 = getRandIndex(maxLength);
    let index2 = getRandIndex(maxLength);
    captcha = captcha.substring(0, index1) + captcha[index1].toUpperCase() + captcha.substring(index1, maxLength);
    captcha = captcha.substring(0, index2) + captcha[index2].toUpperCase() + captcha.substring(index2, maxLength);
    data = captcha;
    captcha = captcha.split('').join(' ');
    pen.fillText(captcha, 40, 40);
  }
}
export function checkIt(){
  let typedData: string|null = (document.getElementById('typedText') as HTMLInputElement).value;
  if(typedData==data){
    localStorage.setItem('captchaTrue','1');
  } else {
    localStorage.setItem('captchaTrue','0');
  }
  getCaptcha();
  (document.getElementById('typedText') as HTMLInputElement).value = "";
}
