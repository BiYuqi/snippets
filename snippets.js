var Snippets = /** @class */ (function () {
    function Snippets() {
        this.Github_Issues = window['Github_Issues'] || {};
        this.defautlLabel = '面试';
        this.defautlId = '1897007925';
        this.labelsWrapper = document.querySelector('.snippets-label');
        this.listsWrapper = document.querySelector('.snippets-list');
    }
    Snippets.prototype.renderTab = function () {
        var _this = this;
        var labels = [];
        Object.keys(this.Github_Issues).forEach(function (id) {
            var issue = _this.Github_Issues[id];
            var displayLabel = issue[0].displayLabel;
            var activeClassName = _this.defautlLabel === displayLabel ? 'class="active"' : '';
            var articleAmount = issue.length > 99 ? '99+' : issue.length;
            labels.push("<span data-id=\"" + id + "\" data-display=\"" + displayLabel + "\" " + activeClassName + ">" + displayLabel + "<i>" + articleAmount + "</i></span>");
        });
        return labels;
    };
    Snippets.prototype.renderList = function (id) {
        var issueList = this.Github_Issues[id];
        var list = [];
        issueList.forEach(function (_a) {
            var issueUrl = _a.issueUrl, name = _a.name;
            list.push("<li><a href=\"" + issueUrl + "\">" + name + "</a></li>");
        });
        return list;
    };
    Snippets.prototype.switchTab = function () {
        var _this = this;
        this.labelsWrapper.addEventListener('click', function (e) {
            if (e.target.nodeName === 'SPAN') {
                var id = e.target.getAttribute('data-id');
                var label = e.target.getAttribute('data-display');
                _this.defautlLabel = label;
                _this.defautlId = id;
                _this.render();
            }
        });
    };
    Snippets.prototype.createTag = function (tag) {
        if (tag === void 0) { tag = 'div'; }
        return document.createElement(tag);
    };
    Snippets.prototype.render = function () {
        this.labelsWrapper.innerHTML = this.renderTab().join('');
        this.listsWrapper.innerHTML = this.renderList(this.defautlId).join('');
        return this;
    };
    return Snippets;
}());
new Snippets().render().switchTab();
