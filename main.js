function setup() { //é responsavel por criar o canvas//
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO); //esse código acessa a webcam 'linhas: 11,12,13'//
  video.size(300, 300); //é responssavel pelo tamanho do video //
  video.hide();//esse código oculta o componente criado pelo p5.js//

  poseNet = ml5.poseNet(video, modelLoaded);//é uma função pre definida do ml5.js // //aonde estã escrito video é a primeira entrada significa video ou imagem no qual queremos que a posenet execute ações,o model loaded é a segunda entrada que confirma a pose. // 
  poseNet.on('pose', gotPoses);//função on é uma função pre definida do ml5 ou seja o posenet só funciona com a presença do pode net 1//
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}