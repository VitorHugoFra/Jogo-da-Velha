// TIC TAC TOE
const tic_tac_toe = {

    // ATTRIBUTES
    board: ['','','','','','','','',''],
    symbols: {
                options: ['O','X'],
                turn_index: 0,
                change: function(){
                    this.turn_index = ( this.turn_index === 0 ? 1:0 );
                    if(this.options[this.turn_index] == 'X'){
                        tic_tac_toe.make_play( Math.floor((Math.random() * 9) + 1))
                        
                    }
                }
            },
    container_element: null,
    gameover: false,
    turn: false,
    velha: 9,
    winning_sequences: [
                        [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6]
                    ],

    // FUNCTIONS
    init: function(container) {
        this.container_element = container;
    },

    make_play: function(position) {
        if (this.gameover) return false;
        if(this.symbols.options[this.symbols.turn_index]){
            
        }
        if (this.board[position] === ''){
            this.velha--
            console.log(this.velha)
            this.board[position] = this.symbols.options[this.symbols.turn_index];
            this.draw();
            let winning_sequences_index = this.check_winning_sequences( this.symbols.options[this.symbols.turn_index] );
            if (winning_sequences_index >= 0){
                
                this.game_is_over(this.symbols.options[this.symbols.turn_index]);
                
                
            } else{
                this.symbols.change();
                
            }
            
            return true;
        }
        else {
            if( this.symbols.options[this.symbols.turn_index] == 'X' && this.velha > 0){
                tic_tac_toe.make_play( Math.floor((Math.random() * 9) + 1))
    
                
            }
            if(this.velha == 0){
                this.game_is_over('V');
                console.log(this.velha)
            }
            return false;
        }
    },

    check_winning_sequences: function(simbol) {

        for ( i in this.winning_sequences ) {
            if (this.board[ this.winning_sequences[i][0] ] == simbol  &&
                this.board[ this.winning_sequences[i][1] ] == simbol &&
                this.board[ this.winning_sequences[i][2] ] == simbol) {
                console.log('winning sequences INDEX:' + i );
                
                
                return i;
            }
        };
        return -1;
    },

    game_is_over: function(simbol) {
        this.gameover = true;
        console.log('GAME OVER');
        if(simbol == 'V'){
            alert("Deu velha")
        }
        else{
            if(simbol == 'X'){
                alert("O (X) ganhou o jogo!")
                this.velha = 9
                //iniciar();
            } else{
                alert("O (O) ganhou o jogo!")
                this.velha = 9
                this.turn_index = ( this.turn_index === 0 ? 1:0 );
                //iniciar();
            }
        }    
    },

    start: function() {
        this.board.fill('');
        this.draw();
        this.gameover = false;       
    },

    draw: function() {
        let content = '';

        for ( i in this.board ) {
            
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>';
        };

        this.container_element.innerHTML = content;
    },
};