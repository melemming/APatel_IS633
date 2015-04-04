function showSection()
{
    var selection=document.getElementById('sectionMenu');
    var section1=document.getElementById('sectionOne');
    var section2=document.getElementById('sectionTwo');
    
    if(selection.value == 'area1')
    {
        section1.style.visibility='visible';
        section2.style.visibility='hidden';
    }
    else if(selection.value == 'area2')
    {
        section2.style.visibility='visible';
        section1.style.visibility='hidden';
    }
    else
    {
        section2.style.visibility='hidden';
        section1.style.visibility='hidden';        
    }
    
    return false;
}