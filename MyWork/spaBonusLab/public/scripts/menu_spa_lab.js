"use strict";

//document ready event handler
$(function() {
	getCategories();
});

function getCategories() {
	$.getJSON("/api/categories/", categories => {
		$.each(categories, (index, category) => {
			$("#categoryList").append(
				$("<a />")
					.text(category.Category)
					.attr("href", "#")
					.addClass("dropdown-item")
					.on("click", e => {
						e.preventDefault();
						$("#categoryName").text(category.Category);
						getProducts(category.Value);
					})
			);
		});
	});
	$("#viewCategories").on("click", e => {
		$("#categoryContainer").show();
	});
}

function getProducts(category) {
	$("#productCard").hide();
	$("#productsList").html("");
	$.getJSON(`/api/products/bycategory/${category}`, products => {
		$.each(products, (index, product) => {
			$("#productsList").append(
				$("<li />")
					.addClass("list-group-item")
					.html(
						$("<a />")
							.text(product.ProductName)
							.attr("href", "#")
							.on("click", (e) => {
                                alert("I've been clicked!")
								e.preventDefault();
								getProduct(product.ProductID);
							})
					)
			);
		});
		$("#productsContainer").show();
	});
}

function getProduct(productId) {
	$.getJSON(`/api/products/${productId}`, product => {
		$("#cardTitle").html("Product ID: " + product.ProductID);
		$("#cardText1").html(product.ProductName);
		$("#cardText2").html("$" + Number(product.UnitPrice).toFixed(2));
		$("#productCard").css("display", "inline-block");
	});
}
