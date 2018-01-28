var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  var customer;
  if (deliLine.length > 0) {
    customer = deliLine[0];
    deliLine.shift();
    return `Currently serving ${customer}.`
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(){
  var res = 'The line is currently: ';
  if (katzDeli.length > 0){
    for(var i = 0; i < katzDeli.length; i++) {
      res+= `${i+1}. ${katzDeliLine[i]}`;
    }
  } else {
    return 'The line is currently empty.';
  }
  return res;
}