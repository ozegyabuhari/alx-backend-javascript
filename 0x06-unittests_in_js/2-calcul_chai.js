function calculateNumber(type, a, b) {
    const a_rd = Math.round(a);
    const b_rd = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = a_rd + b_rd;
	break;
    case 'SUBTRACT':
	c = a_rd - b_rd;
	break;
    case 'DIVIDE':
      if (b_rd === 0) {
            c = "Error";
      } else {
            c = a_rd / b_rd;
      }
      break;
    }
    return c;
}

module.exports = calculateNumber;
