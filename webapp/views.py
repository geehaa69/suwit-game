from flask import Blueprint, flash, get_flashed_messages, redirect, render_template, request, url_for


# declaration view
view = Blueprint('view', __name__)


# some variable
abjad = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
abjad_spasi = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']


# route
@view.route('/')
@view.route('/home')
def home():
    return render_template('home.html')


@view.route('/game', methods=['POST'])
def game():
    # some variable
    cek = False
    
    # tangkap inputan user
    username = request.form['username']
    username = username.lower()

    # periksa inputannya
    for abj in abjad:
        if abj in username:
            cek = True
            break
    if cek == False:
        flash("Nama setidaknya harus mengandung 1 huruf")
        return redirect('/home', code=302)
    for usr in username:
        if usr not in abjad_spasi:
            flash("Nama hanya boleh berisi abjad")
            return redirect('/home', code=302)
    if len(username) > 15:
        flash("Nama tidak boleh lebih dari 15 karakter")
        return redirect('/home', code=302)

    # x = get_flashed_messages(with_categories=True)

    return render_template('game.html', username=username)