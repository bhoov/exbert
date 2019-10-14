import * as d3 from 'd3'

d3.selection.prototype.clear = function() {  
    this.selectAll('*').remove();
    return this;
}

d3.selection.prototype.toggleClass = function(className) {  
    this.classed(className, !this.classed(className));
    return this;
}

d3.selection.prototype.show = function() {  
    this.style('display', 'initial');
    return this;
}

d3.selection.prototype.hide = function() {  
    this.style('display', 'none');
    return this;
}

d3.selection.prototype.toggle = function() {  
    var isHidden = this.style('display') == 'none';
    return this.style('display', isHidden ? 'inherit' : 'none');
}

d3.selection.prototype.after = function(tagName) {  
    var elements = [];
  
    this.each(function() {
      var element = document.createElement(tagName);
      this.parentNode.insertBefore(element, this.nextSibling);
      elements.push(element);
    });
  
    return d3.selectAll(elements);
  }

d3.selection.prototype.before = function(tagName) {  
    var elements = [];
  
    this.each(function() {
      var element = document.createElement(tagName);
      this.parentNode.insertBefore(element, this);
      elements.push(element);
    });
  
    return d3.selectAll(elements);
}