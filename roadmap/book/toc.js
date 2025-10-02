// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> The Rust Programming Language</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="foreword.html"><strong aria-hidden="true">1.1.</strong> Foreword</a></li><li class="chapter-item expanded "><a href="introduction.html"><strong aria-hidden="true">1.2.</strong> Introduction</a></li></ol></li><li class="chapter-item expanded "><a href="00-enviroment-setup/getting-started.html"><strong aria-hidden="true">2.</strong> Getting Started</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="00-enviroment-setup/rust-playground.html"><strong aria-hidden="true">2.1.</strong> Rust Playground</a></li><li class="chapter-item expanded "><a href="00-enviroment-setup/installing-rust-and-cargo.html"><strong aria-hidden="true">2.2.</strong> Installing Rust</a></li><li class="chapter-item expanded "><a href="00-enviroment-setup/uninstall-rust.html"><strong aria-hidden="true">2.3.</strong> Uninstall</a></li><li class="chapter-item expanded "><a href="00-enviroment-setup/editors-and-ides.html"><strong aria-hidden="true">2.4.</strong> Editors and IDEs</a></li></ol></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/index.html"><strong aria-hidden="true">3.</strong> Common Programming Concepts</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="01-common-programming-concepts/comments.html"><strong aria-hidden="true">3.1.</strong> Comments</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/print.html"><strong aria-hidden="true">3.2.</strong> Print</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/line-break.html"><strong aria-hidden="true">3.3.</strong> Line break</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/variables.html"><strong aria-hidden="true">3.4.</strong> Variables</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/mutability.html"><strong aria-hidden="true">3.5.</strong> Mutability</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/constant.html"><strong aria-hidden="true">3.6.</strong> Constant</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/format.html"><strong aria-hidden="true">3.7.</strong> Format</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/shadowing.html"><strong aria-hidden="true">3.8.</strong> Shadowing</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/scope.html"><strong aria-hidden="true">3.9.</strong> Scope</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/questions.html"><strong aria-hidden="true">3.10.</strong> Question</a></li></ol></li><li class="chapter-item expanded "><a href="02-data-structures/index.html"><strong aria-hidden="true">4.</strong> Data Structures</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="02-data-structures/u-integers.html"><strong aria-hidden="true">4.1.</strong> u - integers</a></li><li class="chapter-item expanded "><a href="02-data-structures/i-integers.html"><strong aria-hidden="true">4.2.</strong> i - integers</a></li><li class="chapter-item expanded "><a href="02-data-structures/floating.html"><strong aria-hidden="true">4.3.</strong> Floating</a></li><li class="chapter-item expanded "><a href="02-data-structures/booleans.html"><strong aria-hidden="true">4.4.</strong> Boolean</a></li><li class="chapter-item expanded "><a href="02-data-structures/char.html"><strong aria-hidden="true">4.5.</strong> Char</a></li><li class="chapter-item expanded "><a href="02-data-structures/string-and-str.html"><strong aria-hidden="true">4.6.</strong> String and &amp;str</a></li><li class="chapter-item expanded "><a href="02-data-structures/tuples.html"><strong aria-hidden="true">4.7.</strong> Tuples</a></li><li class="chapter-item expanded "><a href="02-data-structures/arrays.html"><strong aria-hidden="true">4.8.</strong> Arrays</a></li><li class="chapter-item expanded "><a href="02-data-structures/questions.html"><strong aria-hidden="true">4.9.</strong> Questions</a></li></ol></li><li class="chapter-item expanded "><a href="03-operators/index.html"><strong aria-hidden="true">5.</strong> Operators</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="03-operators/arithmetic-operators.html"><strong aria-hidden="true">5.1.</strong> Arithmetic Operators</a></li><li class="chapter-item expanded "><a href="03-operators/assignment-operators.html"><strong aria-hidden="true">5.2.</strong> Assignment Operators</a></li><li class="chapter-item expanded "><a href="03-operators/precedence.html"><strong aria-hidden="true">5.3.</strong> Precedence</a></li><li class="chapter-item expanded "><a href="03-operators/logical.html"><strong aria-hidden="true">5.4.</strong> Logical</a></li><li class="chapter-item expanded "><a href="03-operators/string-and-str.html"><strong aria-hidden="true">5.5.</strong> String and &amp;str</a></li><li class="chapter-item expanded "><a href="03-operators/tuples.html"><strong aria-hidden="true">5.6.</strong> Tuples</a></li><li class="chapter-item expanded "><a href="03-operators/array.html"><strong aria-hidden="true">5.7.</strong> Array</a></li><li class="chapter-item expanded "><a href="03-operators/questions.html"><strong aria-hidden="true">5.8.</strong> Questions</a></li></ol></li><li class="chapter-item expanded "><a href="04-strings-and-str/index.html"><strong aria-hidden="true">6.</strong> String and &amp;str</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="04-strings-and-str/string.html"><strong aria-hidden="true">6.1.</strong> String</a></li><li class="chapter-item expanded "><a href="04-strings-and-str/str.html"><strong aria-hidden="true">6.2.</strong> &amp;str</a></li><li class="chapter-item expanded "><a href="04-strings-and-str/methods-part1.html"><strong aria-hidden="true">6.3.</strong> Methods - Part 1</a></li><li class="chapter-item expanded "><a href="04-strings-and-str/methods-part2.html"><strong aria-hidden="true">6.4.</strong> Methods - Part 2</a></li><li class="chapter-item expanded "><a href="04-strings-and-str/data_entry.html"><strong aria-hidden="true">6.5.</strong> Data Entry</a></li><li class="chapter-item expanded "><a href="04-strings-and-str/questions.html"><strong aria-hidden="true">6.6.</strong> Questions - String and &amp;str</a></li></ol></li><li class="chapter-item expanded "><a href="05-control-flow/index.html"><strong aria-hidden="true">7.</strong> Control Flow</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="05-control-flow/if.html"><strong aria-hidden="true">7.1.</strong> If</a></li><li class="chapter-item expanded "><a href="05-control-flow/else.html"><strong aria-hidden="true">7.2.</strong> Else</a></li><li class="chapter-item expanded "><a href="05-control-flow/else-if.html"><strong aria-hidden="true">7.3.</strong> Else if</a></li><li class="chapter-item expanded "><a href="05-control-flow/loop.html"><strong aria-hidden="true">7.4.</strong> Loop</a></li><li class="chapter-item expanded "><a href="05-control-flow/while.html"><strong aria-hidden="true">7.5.</strong> While</a></li><li class="chapter-item expanded "><a href="05-control-flow/for.html"><strong aria-hidden="true">7.6.</strong> For</a></li><li class="chapter-item expanded "><a href="05-control-flow/match.html"><strong aria-hidden="true">7.7.</strong> Match</a></li><li class="chapter-item expanded "><a href="05-control-flow/questions-if-and-else.html"><strong aria-hidden="true">7.8.</strong> Questions - If and Else</a></li><li class="chapter-item expanded "><a href="05-control-flow/questions-loop.html"><strong aria-hidden="true">7.9.</strong> Questions - Loop</a></li><li class="chapter-item expanded "><a href="05-control-flow/questions-while.html"><strong aria-hidden="true">7.10.</strong> Questions - While</a></li><li class="chapter-item expanded "><a href="05-control-flow/questions-for.html"><strong aria-hidden="true">7.11.</strong> Questions - For</a></li><li class="chapter-item expanded "><a href="05-control-flow/questions-match.html"><strong aria-hidden="true">7.12.</strong> Questions - Match</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
