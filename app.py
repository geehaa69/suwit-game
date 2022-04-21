from webapp import create_app

# run the create app function
app = create_app()

if __name__ == '__main__':
    app.run(debug=True)