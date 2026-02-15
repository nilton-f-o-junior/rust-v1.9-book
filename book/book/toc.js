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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> A Linguagem de Programação Rust</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="foreword.html"><strong aria-hidden="true">1.1.</strong> Prefácio</a></li><li class="chapter-item expanded "><a href="introduction.html"><strong aria-hidden="true">1.2.</strong> Introdução</a></li></ol></li><li class="chapter-item expanded "><a href="00-enviroment-setup/index.html"><strong aria-hidden="true">2.</strong> Começando</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="00-enviroment-setup/rust-playground.html"><strong aria-hidden="true">2.1.</strong> Rust Playground</a></li><li class="chapter-item expanded "><a href="00-enviroment-setup/installing-rust-and-cargo.html"><strong aria-hidden="true">2.2.</strong> Instalar Rust</a></li><li class="chapter-item expanded "><a href="00-enviroment-setup/version-rust-and-cargo.html"><strong aria-hidden="true">2.3.</strong> Versão - Rust e Cargo</a></li><li class="chapter-item expanded "><a href="00-enviroment-setup/uninstall-rust.html"><strong aria-hidden="true">2.4.</strong> Desinstalar</a></li><li class="chapter-item expanded "><a href="00-enviroment-setup/editors-and-ides.html"><strong aria-hidden="true">2.5.</strong> Editores e IDEs</a></li></ol></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/index.html"><strong aria-hidden="true">3.</strong> Conceitos Comuns de Programação</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="01-common-programming-concepts/comments.html"><strong aria-hidden="true">3.1.</strong> Comentários</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/print.html"><strong aria-hidden="true">3.2.</strong> Print</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/escape-characters.html"><strong aria-hidden="true">3.3.</strong> Caracteres de Escape</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/variables.html"><strong aria-hidden="true">3.4.</strong> Variáveis</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/mutability.html"><strong aria-hidden="true">3.5.</strong> Mutabilidade</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/constant.html"><strong aria-hidden="true">3.6.</strong> Constantes</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/format.html"><strong aria-hidden="true">3.7.</strong> Formatação</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/debug-formatting.html"><strong aria-hidden="true">3.8.</strong> Formatação para Debugging</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/shadowing.html"><strong aria-hidden="true">3.9.</strong> Shadowing</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/scope.html"><strong aria-hidden="true">3.10.</strong> Escopo</a></li><li class="chapter-item expanded "><a href="01-common-programming-concepts/questions.html"><strong aria-hidden="true">3.11.</strong> Questões</a></li></ol></li><li class="chapter-item expanded "><a href="02-data-structures/index.html"><strong aria-hidden="true">4.</strong> Estruturas de Dados</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="02-data-structures/u-integers.html"><strong aria-hidden="true">4.1.</strong> u - inteiros</a></li><li class="chapter-item expanded "><a href="02-data-structures/i-integers.html"><strong aria-hidden="true">4.2.</strong> i - inteiros</a></li><li class="chapter-item expanded "><a href="02-data-structures/floating.html"><strong aria-hidden="true">4.3.</strong> Ponto Flutuante</a></li><li class="chapter-item expanded "><a href="02-data-structures/booleans.html"><strong aria-hidden="true">4.4.</strong> Booleanos</a></li><li class="chapter-item expanded "><a href="02-data-structures/char.html"><strong aria-hidden="true">4.5.</strong> Char</a></li><li class="chapter-item expanded "><a href="02-data-structures/string-and-str.html"><strong aria-hidden="true">4.6.</strong> String e &amp;str</a></li><li class="chapter-item expanded "><a href="02-data-structures/tuples.html"><strong aria-hidden="true">4.7.</strong> Tuplas</a></li><li class="chapter-item expanded "><a href="02-data-structures/modifying-tuples.html"><strong aria-hidden="true">4.8.</strong> Modificando Tuplas</a></li><li class="chapter-item expanded "><a href="02-data-structures/arrays.html"><strong aria-hidden="true">4.9.</strong> Arrays</a></li><li class="chapter-item expanded "><a href="02-data-structures/modifying-arrays.html"><strong aria-hidden="true">4.10.</strong> Modificando Arrays</a></li><li class="chapter-item expanded "><a href="02-data-structures/questions.html"><strong aria-hidden="true">4.11.</strong> Questões</a></li></ol></li><li class="chapter-item expanded "><a href="03-operators/index.html"><strong aria-hidden="true">5.</strong> Operadores</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="03-operators/arithmetic-operators.html"><strong aria-hidden="true">5.1.</strong> Operadores Aritméticos</a></li><li class="chapter-item expanded "><a href="03-operators/assignment-operators.html"><strong aria-hidden="true">5.2.</strong> Operadores de Atribuição</a></li><li class="chapter-item expanded "><a href="03-operators/precedence.html"><strong aria-hidden="true">5.3.</strong> Precedência</a></li><li class="chapter-item expanded "><a href="03-operators/comparison.html"><strong aria-hidden="true">5.4.</strong> Comparação</a></li><li class="chapter-item expanded "><a href="03-operators/logical.html"><strong aria-hidden="true">5.5.</strong> Lógicos</a></li><li class="chapter-item expanded "><a href="03-operators/string-and-str.html"><strong aria-hidden="true">5.6.</strong> String e &amp;str</a></li><li class="chapter-item expanded "><a href="03-operators/tuples.html"><strong aria-hidden="true">5.7.</strong> Tuplas</a></li><li class="chapter-item expanded "><a href="03-operators/array.html"><strong aria-hidden="true">5.8.</strong> Arrays</a></li><li class="chapter-item expanded "><a href="03-operators/questions.html"><strong aria-hidden="true">5.9.</strong> Questões</a></li></ol></li></ol>';
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
