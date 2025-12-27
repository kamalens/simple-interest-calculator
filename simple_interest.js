function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;

    SI = (p * r * t) / 100;

    document.getElementById("simple interest").innerText = SI;
    
}
        