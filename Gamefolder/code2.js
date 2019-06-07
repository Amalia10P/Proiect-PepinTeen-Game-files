gdjs.Avatar3Code = {};
gdjs.Avatar3Code.GDPlayerObjects1= [];
gdjs.Avatar3Code.GDPlayerObjects2= [];
gdjs.Avatar3Code.GDJackObjects1= [];
gdjs.Avatar3Code.GDJackObjects2= [];
gdjs.Avatar3Code.GDgrassObjects1= [];
gdjs.Avatar3Code.GDgrassObjects2= [];
gdjs.Avatar3Code.GDFinalObjects1= [];
gdjs.Avatar3Code.GDFinalObjects2= [];
gdjs.Avatar3Code.GDbackgroundObjects1= [];
gdjs.Avatar3Code.GDbackgroundObjects2= [];

gdjs.Avatar3Code.conditionTrue_0 = {val:false};
gdjs.Avatar3Code.condition0IsTrue_0 = {val:false};
gdjs.Avatar3Code.condition1IsTrue_0 = {val:false};


gdjs.Avatar3Code.eventsList0xb24c0 = function(runtimeScene) {

{


gdjs.Avatar3Code.condition0IsTrue_0.val = false;
{
gdjs.Avatar3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Avatar3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "..\\James Horner - Avatar Theme Song (Avatar Soundtrack) HQ 1080p.mp3", true, 100, 1);
}}

}


}; //End of gdjs.Avatar3Code.eventsList0xb24c0


gdjs.Avatar3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Avatar3Code.GDPlayerObjects1.length = 0;
gdjs.Avatar3Code.GDPlayerObjects2.length = 0;
gdjs.Avatar3Code.GDJackObjects1.length = 0;
gdjs.Avatar3Code.GDJackObjects2.length = 0;
gdjs.Avatar3Code.GDgrassObjects1.length = 0;
gdjs.Avatar3Code.GDgrassObjects2.length = 0;
gdjs.Avatar3Code.GDFinalObjects1.length = 0;
gdjs.Avatar3Code.GDFinalObjects2.length = 0;
gdjs.Avatar3Code.GDbackgroundObjects1.length = 0;
gdjs.Avatar3Code.GDbackgroundObjects2.length = 0;

gdjs.Avatar3Code.eventsList0xb24c0(runtimeScene);
return;

}
gdjs['Avatar3Code'] = gdjs.Avatar3Code;
