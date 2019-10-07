//game logistics still add in user data

function checkElegibility {
	if (cardDes.deck.number == cardDes.cardJustPlayed.number){
		socet.emit(allClear)
	}
	else
		if (cardDes.color == cardJustPlayed.color){
			socet.emit(allClear)
		}
}
//end game logistics