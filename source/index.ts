/**
 * Report Designer
 */
function getNodeOffset(el: HTMLElement) {
    let _x = 0, _y = 0, _oh = el && el.offsetHeight, _ow = el && el.offsetWidth;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent as HTMLElement;
    }
    return { top: _y, left: _x, bottom: _y + _oh, right: _x + _ow };
}