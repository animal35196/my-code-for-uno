function checkElegibility {
	if (cardDes.cardsnumber == cardJustPlayed.number)
		socet.emit(allClear)
	else
		if (cardDes.color == cardJustPlayed.color)
			socet.emit(allClear)
}