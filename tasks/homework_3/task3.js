const arr1= ['crazy.pr', 'black-and-white.als', 'illegal.wav', 'exultant.mp3', 'exotic.jar', 'capricious.pt', 'abundant.ala', 'eatable.zbrush', 'careful.py', 'godly.css',
    'clever.txt', 'dusty.maya', 'awesome.zbrush', 'discreet.jar', 'creepy.h', 'fair.pt', 'descriptive.mp3', 'boundless.ala', 'berserk.xml', 'hungry.exe', 'awful.exe'];
const arr2 = ['hanging.h', 'fixed.ala', 'first.pr', 'cooperative.cpp', 'elfin.zbrush', 'fair.pr', 'cool.css', 'highfalutin.py', 'alcoholic.maya', 'heady.cpp', 'befitting.wav', 'certain.jar', 'glistening.exe', 'attractive.wav', 'gruesome.wp', 'happy.txt', 'finicky.jar', 'clumsy.js', 'assorted.js', 'highfalutin.cpp', 'damaging.h', 'ethereal.xml', 'great.jar', 'dead.wp', 'acoustic.xml', 'devilish.css', 'curly.pt', 'exuberant.ala', 'flippant.wp', 'holistic.html', 'cut.txt', 'adamant.py', 'dashing.zbrush', 'conscious.wp', 'black-and-white.cpp', 'elated.pt', 'high-pitched.exe', 'flowery.xml', 'glib.wp', 'industrious.html', 'arrogant.zbrush', 'accessible.html', 'classy.jar', 'acceptable.maya', 'cynical.pt', 'erratic.pt', 'earthy.als', 'dramatic.als', 'bite-sized.py', 'ahead.xml', 'giddy.js', 'fortunate.txt', 'early.txt', 'imaginary.wav', 'cute.zbrush', 'graceful.html', 'far-flung.Ue4', 'goofy.exe', 'abundant.mp3', 'ambitious.txt', 'gigantic.jar', 'abashed.xml', 'guiltless.Ue4', 'adventurous.py', 'guarded.jar', 'extra-large.zbrush', 'filthy.h', 'easy.zbrush', 'glorious.als', 'detailed.pr', 'flashy.zbrush', 'breezy.als', 'faithful.py', 'curly.js', 'chief.js', 'concerned.js', 'cumbersome.zbrush', 'ahead.maya', 'berserk.cpp', 'deserted.pt', 'cool.zbrush', 'broken.cpp', 'glossy.pt', 'deep.xml', 'average.wav', 'dangerous.cpp', 'acrid.wav', 'dear.zbrush', 'deeply.pr', 'detailed.cpp', 'friendly.h', 'first.css', 'heady.exe', 'far-flung.als', 'erratic.mp3', 'exciting.pr']
const arr3 = ['dramatic.txt', 'incompetent.jar', 'alcoholic.wp', 'clumsy.py', 'abject.h', 'boring.exe', 'aloof.pr',
    'familiar.py', 'fanatical.py', 'ill-informed.html', 'fierce.pr', 'accurate.html', 'grotesque.pr', 'brown.py',
    'courageous.pt', 'grouchy.jar', 'giant.pt', 'dirty.h', 'abaft.jar', 'enormous.zbrush', 'creepy.cpp', 'beneficial.py',
    'absorbing.ala', 'heartbreaking.html', 'exclusive.js', 'fluttering.html', 'happy.als', 'fresh.pr', 'adamant.txt', 'awful.maya',
    'frightening.maya', 'bizarre.html', 'efficacious.exe', 'illegal.wav', 'dizzy.js', 'gusty.wp', 'delightful.pt', 'full.als', 'chivalrous.xml',
    'filthy.js', 'functional.jar', 'conscious.wav', 'feeble.exe', 'hilarious.cpp', 'earthy.py', 'handy.txt', 'hollow.cpp',
    'aggressive.js', 'fat.h', 'drunk.exe', 'clear.h', 'easy.wav', 'eatable.pt', 'grumpy.css', 'empty.exe', 'brief.jar', 'aggressive.txt',
    'aggressive.txt', 'gruesome.ala', 'awake.txt', 'apathetic.mp3', 'holistic.pt', 'embarrassed.css', 'flashy.maya', 'exultant.ala',
    'exuberant.exe', 'graceful.pt', 'dependent.py', 'gigantic.wp', 'husky.js', 'immense.pr', 'defiant.cpp', 'cooperative.html', 'frantic.maya',
    'abashed.css', 'dysfunctional.h', 'gusty.js', 'dynamic.txt', 'dreary.pt', 'giddy.ala', 'exciting.css', 'best.als', 'humdrum.css', 'busy.jar', 'frail.cpp', 'cagey.wav'];

function PopularExtension(arr) {
    const extension = arr.map((x) => x.replace(/^.*\./, '.'));
    let res = extension.reduce((arr, el) => {
        arr[el] = (arr[el] || 0) + 1;
        return arr;
    }, []);
    let outputArr = [];
    for (let key in res) {
        outputArr.push([key, res[key]]);
    }
    outputArr = outputArr.sort(function (a, b) {
        return b[1] - a[1]
    });
    let Arr = [];
    for (let key in outputArr) {
        if (outputArr[0][1] === outputArr[key][1]) {
            Arr.push(outputArr[key][0])
        }
    }

    return Arr.sort();
}
console.log(PopularExtension(arr1));
console.log(PopularExtension(arr2));
console.log(PopularExtension(arr3));