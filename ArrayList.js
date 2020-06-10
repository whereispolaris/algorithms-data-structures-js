class ArrayList {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	// Push: Add item to the end
	push(value) {
		this.data[this.length] = value;
		this.length++;
	}

	// Pop: Delete item from the end
	pop(value) {
		// Store the last item in a variable
		const ans = this.data[this.length - 1];

		// Delete the last item
		delete this.data[this.length - 1];

		// Update the index
		this.length--;

		// Return the item stored in the variable
		return ans;
	}

	// Get: Print item by index
	get(index) {
		return this.data[index];
	}

	// Delete: Remove item by index
	delete(index) {
		// Store the item in a variable
		const ans = this.data[index];

		this._collapseTo(index);
		return ans;
	}

	// CollapseTo: Will update the indexes of all array items if an item is deleted or inserted
	_collapseTo(index) {
		for (let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

module.export = ArrayList;
