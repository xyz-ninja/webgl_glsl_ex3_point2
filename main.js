// вершинный шейдер
var VSHADER_SOURCE = 
'attribute vec4 a_Position;\n' + 
'attribute float a_PointSize;\n' + 
'void main() {\n' + 
'	gl_Position = a_Position;\n' + 
'	gl_PointSize = a_PointSize;\n' + 
'}\n';
// фрагментный шейдер
var FSHADER_SOURCE = 
'void main() {\n' + 
'	gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n' + 
'}\n';

function main() {
	var canvas = document.getElementById('example');
	var gl = getWebGLContext(canvas);
	initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE);

	var a_Position = gl.getAttribLocation(gl.program,'a_Position');
	var a_PointSize = gl.getAttribLocation(gl.program,'a_PointSize');
	// сохранить координаты в переменной атрибуте
	gl.vertexAttrib3f(a_Position,0.0,0.5,0.0);
	gl.vertexAttrib1f(a_PointSize,5.0);

	gl.clearColor(0.0,0.0,0.0,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.Points , 0 , 1);

}


