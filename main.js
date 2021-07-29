* {box-sizing: border-box;}

html,
body {
  height: 100%;
	margin: 0;
  overflow: hidden;
  border: 4px solid #003A6F;
  background:  #FFFCEC;
  font-family: 'Arial';
}

.emblem {
	position: absolute;
	left: 0;
	right: 0;
  top: 25vh;
	margin: 0 auto;
	width: 50vh;
	height: 50vh;
	border-radius: 50%;
  font-weight: bold;
	color:  #003A6F;
	animation: spinZ 20s linear infinite;
	text-align: center;

	span {
		position: absolute;
		display: inline-block;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		text-transform: uppercase;
		font-size: 5vh;
		transition: all .5s cubic-bezier(0,0,0,1);
	}

	@keyframes spinZ {
		0% {
			transform: rotateZ(360deg);
		}
		100% {
			transform: rotateZ(0deg);
		}
	}
}
