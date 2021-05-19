# Copyright (c) 2021, Harshit and Anmol and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class FabricInward(Document):
	def before_save(doc):
		taga_table = doc.taga_table
		new_taga_table = taga_table

		barcodes_set = set()

		#Assign Taga Quality
		for i in range(len(taga_table)):
			new_taga_table[i].taga_quality_link = doc.quality

		#Generate Set
		for i in range(len(taga_table)):
		
			barcodes_set.add(f'{taga_table[i].parent} - {taga_table[i].idx}')

		#Remove used barcodes from set
		for i in range(len(taga_table)):
			if taga_table[i].taga_barcode:
				barcodes_set.remove(taga_table[i].taga_barcode)

		#Assign unused barcodes to empty rows
		for i in range(len(taga_table)):
			if not taga_table[i].taga_barcode:
				new_taga_table[i].name = barcodes_set.pop()
				new_taga_table[i].taga_barcode = new_taga_table[i].name

		#Calculate Taga Metres and Taga Weight
		total_metres = 0
		total_weight = 0
		for i in range(len(taga_table)):
			try:
				total_metres += float(taga_table[i].taga_metre)
			except:
				print("Invalid Number")

			try:
				total_weight += float(taga_table[i].taga_weight)
			except:
				print("Invalid Number")

		doc.total_metres = total_metres
		doc.total_weight = total_weight
		doc.taga_table = new_taga_table
