class CatNav extends React.Component {
    render() {
        return (
            <div class="row">
                <ul class="cat-nav center-align">
                    <li class="cat-link left valign-wrapper">
                        <i class="material-icons">this.props.icon</i>this.props.title
                    </li>
                </ul>
            </div>
        );
    }
}
