/**
 * jQuery Tabify
 *
 * Transform certain lists of blocks into tabs.
 *
 * Usage:
 *
 * $('.tabs' ).tabify();
 *
 * This will hide all children of each matching group of tabs, and prepend a
 * p.tab_menu containing one anchor per child, whose text is the contents of
 * the child's title attribute.  Example:
 *
 * <div class="tabs">
 *   <div title="First tab">
 *     ...
 *   </div>
 *   <div title="Second tab">
 *     ...
 *   </div>
 * </div>
 *
 * This would become:
 *
 * <div class="tabs">
 *   <p class="tab_menu"><a href="#" class="selected">First tab</a><a href="#">Second tab</a></p>
 *   <div title="First tab">
 * ...
 *
 * All you have to do is style "p.tab_menu" to your liking, knowing that one
 * of its anchors will have class "selected" at any time.
 *
 * @package   jquery.tabify
 * @author    Stéphane Lavergne <http://www.imars.com/>
 * @copyright 2013 Stéphane Lavergne
 * @license   http://www.gnu.org/licenses/lgpl-3.0.txt  GNU LGPL version 3
 */

/*jslint node: false, browser: true, es5: false, white: true, nomen: true, plusplus: true */
/*global jQuery: true */

"use strict";

(function ($) {
	$.fn.tabify = function (args) {

		return this.each(function () {
			var
				tablist = $(this),
				tabs    = tablist.children(),
				menu    = $('<p>').addClass('tab_menu')
			;

			tabs.each(function (i) {
				menu.append(
					$('<a>')
						.prop('href', '#')
						.text($(this).prop('title'))
						.click(function () {
							tabs.hide().eq(i).show();
							menu.children().removeClass('selected').eq(i).addClass('selected');
							return false;
						})
				);
			});
			tablist.prepend(menu);
			menu.children().first().click();

			return this;
		});

	};
}( jQuery ));
